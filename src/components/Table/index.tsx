import { FC, ReactNode } from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import { DefaultDisplay } from "../DefaultDisplay/index";

const sxStyles = { height: "60%", overflow: "auto" };

type THeadProps = {
  titles: Array<string>;
};
type TBodyProps = {
  length: number;
  isLoading?: boolean;
  children: ReactNode;
};

const TableHead: FC<THeadProps> = ({ titles = [] }) => {
  return (
    <thead>
      <tr>
        <th>Row</th>
        {titles.map((title) => (
          <th>{title}</th>
        ))}
      </tr>
    </thead>
  );
};
const TableBody: FC<TBodyProps> = ({ length, isLoading, children }) => {
  return !length ? (
    <DefaultDisplay isLoading={isLoading} />
  ) : (
    <tbody>{children}</tbody>
  );
};

type Props = {
  children: ReactNode;
};

const CostumTable = ({ children }: Props) => {
  return (
    <Sheet sx={sxStyles}>
      <Table
        aria-label='table with sticky header'
        stickyHeader
        stripe='odd'
        hoverRow
      >
        {children}
      </Table>
    </Sheet>
  );
};

export default CostumTable;
CostumTable.TableHead = TableHead;
CostumTable.TableBody = TableBody;
