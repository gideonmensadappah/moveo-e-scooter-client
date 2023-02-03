import { FC, useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import Tooltip from "@mui/material/Tooltip";

type Props = {
  tooltipText?: string;
};

const Filter: FC<Props> = ({ tooltipText }) => {
  const [isFilterByStatus, setIsFilterByStatus] = useState(false);
  const handleFilterClick = () => {
    setIsFilterByStatus((prev) => !prev);
  };

  return (
    <Tooltip title={tooltipText}>
      {isFilterByStatus ? (
        <FilterAltIcon onClick={handleFilterClick} />
      ) : (
        <FilterAltOffIcon onClick={handleFilterClick} />
      )}
    </Tooltip>
  );
};

export default Filter;
