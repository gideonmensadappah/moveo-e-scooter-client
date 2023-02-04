import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { ActionsArea } from "../../components/ActionsArea/index";
import { ContentWrapper } from "../../components/Layout/ContentWrapper/index";
import CostumButton from "../../components/Button/index";
import CostumTable from "../../components/Table/index";
import CostumModal from "../../components/Modal";
import { ParkingForm } from "../../components/Forms";
import CostumTypography from "../../components/Typography/index";

import { parkingsSelector } from "../../redux/parking/parking-selector";
import { get_parkings } from "../../redux/parking/parking-actions";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import searchAlgo from "../../utils/searchAlgo";
import { debounceSearch } from "../../utils/debounceSearch";

import { Parking } from "../../interfaces/Parking/parking-interface";

const ScootersScreen = () => {
  const dispatch = useAppDispatch();

  const parkings = useSelector(parkingsSelector);

  const [userText, setUserText] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    debounceSearch(setUserText((prev) => value));
  };

  const parkingsList = useMemo(() => {
    if (!userText) {
      return parkings;
    }

    return searchAlgo<Parking>(parkings, userText, "address");
  }, [userText, parkings]);

  useEffect(() => {
    dispatch(get_parkings(""));
  }, []);

  return (
    <ContentWrapper>
      <CostumButton onClick={handleOpen}>Add</CostumButton>
      <ActionsArea>
        <ActionsArea.Search handleChange={handleSearchInputChange} />
      </ActionsArea>
      <CostumTable parkings={parkingsList} />
      <CostumModal modalState={open} onClose={handleClose}>
        <CostumModal.Text children={HeaderText} />
        <CostumModal.Text children={Info} />
        <ParkingForm handleCloseModal={handleClose} />
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
