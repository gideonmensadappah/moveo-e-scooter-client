import { useSelector } from "react-redux";
import { parkingLoadingSelector } from "../../redux/parking/parking-selector";

const styles = {
  position: "absolute" as any,
  left: "45%",
};

export const DefaultDisplay = () => {
  const isLoading = useSelector(parkingLoadingSelector);
  return (
    <div style={styles}>
      {isLoading ? "Loading..." : "No data available..."}
    </div>
  );
};
