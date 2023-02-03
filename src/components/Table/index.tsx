import { FC } from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import { Parking } from "../../interfaces/Parking/parking-interface";

type Props = {
  parkings: Array<Parking>;
};

const sxStyles = { height: "60%", overflow: "auto" };

const CostumTable: FC<Props> = ({ parkings }) => {
  if (!parkings.length) {
    return null;
  }

  return (
    <Sheet sx={sxStyles}>
      <Table
        aria-label='table with sticky header'
        stickyHeader
        stripe='odd'
        hoverRow
      >
        <thead>
          <tr>
            <th>Row</th>
            <th>Address</th>
            <th>number of scooters</th>
            <th>latitude</th>
            <th>longitude</th>
          </tr>
        </thead>
        <tbody>
          {parkings.map((row, key) => (
            <tr key={row._id}>
              <td>{key}</td>
              <td>{row.address}</td>
              <td>{row.amountOfScootersAvailabile}</td>
              <td>{row.location?.latitude}</td>
              <td>{row.location?.longitude}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
};

export default CostumTable;
