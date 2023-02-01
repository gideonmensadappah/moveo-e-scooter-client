import { FC } from "react";

import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@material-ui/core";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const item = {
  py: "2px",
  px: 3,
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export const SignOutItem: FC<{}> = ({}) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.container} sx={{ ...item, ...itemCategory }}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText>Logout</ListItemText>
    </ListItem>
  );
};

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    position: "absolute !important" as any,
    bottom: 0,

    [breakpoints.down("sm")]: {
      position: "static !important" as any,
    },
  },
}));
