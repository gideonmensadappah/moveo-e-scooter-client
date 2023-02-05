import { useEffect, useMemo, useState, FC } from "react";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

import { ActionsArea } from "../../components/ActionsArea/index";
import { ContentWrapper } from "../../components/Layout/ContentWrapper/index";
import CostumButton from "../../components/Button/index";
import CostumTable from "../../components/Table/index";
import CostumModal from "../../components/Modal";
import { ScooterForm } from "../../components/Forms";
import CostumTypography from "../../components/Typography/index";

import { useAppDispatch } from "../../hooks/useAppDispatch";

import searchAlgo from "../../utils/searchAlgo";
import { debounceSearch } from "../../utils/debounceSearch";
import { Scooter } from "../../interfaces/Sooter/scooter-interface";
import {
  scootersSelector,
  scooterLoadingSelector,
} from "../../redux/scooter/scooter-selector";
import {
  get_scooters,
  get_filtered_scooters_by_active,
} from "../../redux/scooter/scooter-actions";
import { selectOptions } from "../../components/Forms/ScooterForm";
import { Status } from "../../enums/scooter/scooter.enum";
import { delete_scooter } from "../../redux/scooter/scooter-actions";

const titles = [
  "latitude",
  "longitude",
  "model",
  "year Of Manufacture",
  "status",
  "",
];
const defaultSelect = { label: "none", value: "none" };

const ScootersScreen = () => {
  const dispatch = useAppDispatch();

  const scooters = useSelector(scootersSelector);

  const [userText, setUserText] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(get_scooters(""));
  }, []);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    debounceSearch(setUserText((prev) => value));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value;

    if (status === defaultSelect.value) {
      dispatch(get_scooters(""));
      return;
    }

    dispatch(get_filtered_scooters_by_active(status as Status));
  };
  const scooterList = useMemo(() => {
    if (!userText) {
      return scooters;
    }

    return searchAlgo<Scooter>(scooters, userText, "model");
  }, [userText, scooters]);

  return (
    <ContentWrapper>
      <CostumButton onClick={handleOpen}>Add</CostumButton>
      <ActionsArea>
        <ActionsArea.Search
          handleChange={handleSearchInputChange}
          searchKey='search by model'
        />
        <ActionsArea.Select
          handleChange={handleSelectChange}
          options={[defaultSelect, ...selectOptions]}
          value=''
        />
      </ActionsArea>
      <Table scooters={scooterList} />
      <CostumModal modalState={open} onClose={handleClose}>
        <CostumModal.Text children={HeaderText} />
        <CostumModal.Text children={Info} />
        <ScooterForm handleCloseModal={handleClose} />
      </CostumModal>
    </ContentWrapper>
  );
};

export default ScootersScreen;

const HeaderText = (
  <CostumTypography type='title'>Add new scooter</CostumTypography>
);

const Info = (
  <CostumTypography type='description' textColor='text.tertiary'>
    Fill in the information of the scooter.
  </CostumTypography>
);

const Table: FC<{ scooters: Array<Scooter> }> = ({ scooters }) => {
  const dispatch = useAppDispatch();

  const scootersIsLoading = useSelector(scooterLoadingSelector);
  const handleDelete = (id: string) => () => {
    const confirmed = window.confirm("are you sure you want to delete?");
    if (!confirmed) return;

    dispatch(delete_scooter(id));
  };
  return (
    <CostumTable>
      <CostumTable.TableHead titles={titles} />
      <CostumTable.TableBody
        length={scooters.length}
        isLoading={scootersIsLoading}
      >
        {scooters.map((row, key) => (
          <tr key={row._id}>
            <td>{key}</td>
            <td>{row.currentLocation?.latitude}</td>
            <td>{row.currentLocation?.longitude}</td>
            <td>{row?.model}</td>
            <td>
              <>{row.yearOfManufacture}</>
            </td>
            <td>{row.status}</td>
            <td>
              <DeleteIcon onClick={handleDelete(row?._id)} />
            </td>
          </tr>
        ))}
      </CostumTable.TableBody>
    </CostumTable>
  );
};
