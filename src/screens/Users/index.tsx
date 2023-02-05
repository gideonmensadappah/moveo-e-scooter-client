import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { ActionsArea } from "../../components/ActionsArea/index";
import { ContentWrapper } from "../../components/Layout/ContentWrapper/index";
import CostumButton from "../../components/Button/index";
import CostumTable from "../../components/Table/index";
import CostumModal from "../../components/Modal";
import CostumTypography from "../../components/Typography/index";

import { useAppDispatch } from "../../hooks/useAppDispatch";

import searchAlgo from "../../utils/searchAlgo";
import { debounceSearch } from "../../utils/debounceSearch";

import { get_users } from "../../redux/user/user-actions";
import { usersSelector } from "../../redux/user/user-selector";
import { User } from "../../interfaces/User/user-interface";
import ScooterForm from "../../components/Forms/ScooterForm";

const titles = ["username", "firtname", "lastname", "email"];

const UsersScreen = () => {
  const dispatch = useAppDispatch();

  const users = useSelector(usersSelector);

  const [userText, setUserText] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(get_users(""));
  }, []);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    debounceSearch(setUserText((prev) => value));
  };

  const usersList = useMemo(() => {
    if (!userText) {
      return users;
    }

    return searchAlgo<User>(users, userText, "username");
  }, [userText, users]);

  return (
    <ContentWrapper>
      <CostumButton onClick={handleOpen}>Add</CostumButton>
      <ActionsArea>
        <ActionsArea.Search handleChange={handleSearchInputChange} />
      </ActionsArea>
      <CostumTable>
        <CostumTable.TableHead titles={titles} />
        <CostumTable.TableBody length={users.length}>
          {usersList.map((row, key) => (
            <tr key={row._id}>
              <td>{key}</td>
              <td>{row.username}</td>
              <td>{row.firstName}</td>
              <td>{row?.lastName}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </CostumTable.TableBody>
      </CostumTable>
      <CostumModal modalState={open} onClose={handleClose}>
        <CostumModal.Text children={HeaderText} />
        <CostumModal.Text children={Info} />
        <ScooterForm handleCloseModal={handleClose} />
      </CostumModal>
    </ContentWrapper>
  );
};

export default UsersScreen;

const HeaderText = (
  <CostumTypography type='title'>Add new user</CostumTypography>
);

const Info = (
  <CostumTypography type='description' textColor='text.tertiary'>
    Fill in the information of the user.
  </CostumTypography>
);
