import React, { FC } from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core";

type Props = {
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
};

const CostumButton: FC<Props> = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <Button {...rest} variant='outlined' className={classes.button}>
      {children}
    </Button>
  );
};

export default CostumButton;

const useStyles = makeStyles(() => ({
  button: {
    width: "fit-content",
  },
}));
