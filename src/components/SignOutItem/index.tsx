import { FC, useContext } from "react";

import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@material-ui/core";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { item, itemCategory } from "../SideNav";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { user_logout } from "../../redux/user/user-actions";
import { authContext } from "../../contexts/AuthContext/index";

export const SignOutItem: FC<{}> = ({}) => {
  const { setUnauthStatus } = useContext(authContext);

  const dispatch = useAppDispatch();
  const classes = useStyles();
  const handleLogout = () => {
    setUnauthStatus();
    dispatch(user_logout());
  };
  return (
    <ListItem
      className={classes.container}
      sx={{ ...item, ...itemCategory }}
      onClick={handleLogout}
    >
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
    cursor: "pointer",

    [breakpoints.down("sm")]: {
      position: "static !important" as any,
    },
  },
}));
