import { FC } from "react";

const styles = {
  position: "absolute" as any,
  left: "45%",
};

type Props = {
  isLoading?: boolean;
};
export const DefaultDisplay: FC<Props> = ({ isLoading }) => {
  return (
    <div style={styles}>
      {isLoading ? "Loading..." : "No data available..."}
    </div>
  );
};
