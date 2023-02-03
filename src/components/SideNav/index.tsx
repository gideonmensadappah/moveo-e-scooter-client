import { useLocation, useNavigate } from "react-router-dom";

import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import ParkingIcon from "@mui/icons-material/LocalParking";
import UsersIcon from "@mui/icons-material/People";
import ElectricScooterIcon from "@mui/icons-material/ElectricScooter";
import { SignOutItem } from "../SignOutItem";

const categories = [
  {
    id: "Actions",
    children: [
      {
        id: "Users",
        icon: <UsersIcon color='primary' />,
      },
      {
        id: "Parkings",
        icon: <ParkingIcon color='primary' />,
      },
      {
        id: "Scooters",
        icon: <ElectricScooterIcon color='primary' />,
      },
    ],
  },
];

export const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

export const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};
const listItemStyledSx = {
  ...item,
  ...itemCategory,
  fontSize: 22,
  color: "#fff",
};
const listStyle = { height: "inherit", overflow: "auto" };

const Navigator = (props: DrawerProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <List disablePadding style={listStyle}>
      <ListItem sx={listItemStyledSx}>E-Scooters</ListItem>
      <ListItem sx={{ ...item, ...itemCategory }}>
        <ListItemIcon>
          <HomeIcon color='primary' />
        </ListItemIcon>
        <ListItemText>Overview</ListItemText>
      </ListItem>
      {categories.map(({ id, children }) => (
        <Box key={id} sx={{ bgcolor: "#101F33" }}>
          <ListItem sx={{ py: 2, px: 3 }}>
            <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
          </ListItem>
          {children.map(({ id: childId, icon }) => (
            <ListItem
              disablePadding
              key={childId}
              onClick={() => navigate(childId.toLowerCase())}
            >
              <ListItemButton
                selected={location.pathname === childId.toLowerCase()}
                sx={item}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{childId}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          <Divider sx={{ mt: 2 }} />
        </Box>
      ))}

      <SignOutItem />
    </List>
  );
};

export default Navigator;
