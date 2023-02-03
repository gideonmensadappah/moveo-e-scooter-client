import { FC } from "react";

import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@material-ui/core";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { item, itemCategory } from "../SideNav";

export const SignOutItem: FC<{}> = ({}) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.container} sx={{ ...item, ...itemCategory }}>
      <ListItemIcon>
        <LogoutIcon color='primary' />
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
