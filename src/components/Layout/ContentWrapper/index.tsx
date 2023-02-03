import { FC, ReactNode } from "react";
import { makeStyles } from "@material-ui/core";

type Props = {
  children: ReactNode;
};

export const ContentWrapper: FC<Props> = ({ children }) => {
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
