import React, { FC, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

import CostumButton from "../../components/Button/index";
import CostumTable from "../../components/Table/index";
import CostumModal from "../../components/Modal";
import { ParkingForm } from "../../components/Forms";
import CostumTypography from "../../components/Typography/index";
import { parkingsSelector } from "../../redux/parking/parking-selector";
import { get_parkings } from "../../redux/parking/parking-actions";
import { useAppDispatch } from "../../hooks/redux";

const ParkingsScreen = () => {
  const dispatch = useAppDispatch();

  const parkings = useSelector(parkingsSelector);

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    dispatch(get_parkings(""));
  }, []);

  return (
    <MainWrapper>
      <CostumButton onClick={handleOpen}>Add</CostumButton>
      <CostumTable parkings={parkings} />
      <CostumModal modalState={open} onClose={handleClose}>
        <CostumModal.Text children={HeaderText} />
        <CostumModal.Text children={Info} />
        <ParkingForm handleCloseModal={handleClose} />
      </CostumModal>
    </MainWrapper>
  );
};

export default ParkingsScreen;

const HeaderText = (
  <CostumTypography type='title'>Add new parking</CostumTypography>
);

const Info = (
  <CostumTypography type='description' textColor='text.tertiary'>
    Fill in the information of the parking.
  </CostumTypography>
);

type Props = {
  children: React.ReactNode;
};

const MainWrapper: FC<Props> = ({ children }) => {
  const classs = useStyles();
  return <div className={classs.wrapper}>{children}</div>;
};

const useStyles = makeStyles(() => ({
  wrapper: {
    height: "90%",
    width: "90%",
    backgroundColor: "rgb(0 0 0 / 6%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    "&>:first-child": {
      alignSelf: "end",
    },
  },
}));
