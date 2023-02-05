import { ReactNode } from "react";
import { makeStyles } from "@material-ui/core";

import Filter from "../Filter";
import SearchInput from "../SearchInput";
import CostumSelect from "../Select/index";

type Props = {
  children?: ReactNode;
};

export const ActionsArea = ({ children }: Props) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

ActionsArea.Filter = Filter;
ActionsArea.Search = SearchInput;
ActionsArea.Select = CostumSelect;

const useStyles = makeStyles(() => ({
  container: {
    width: "80%",
    display: "flex",
    justifyContent: "space-evenly",
    alignSelf: "center",

    "&>:first-child": {
      width: "50%",
    },
  },
}));
