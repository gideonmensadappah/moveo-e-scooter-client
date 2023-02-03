import { FC, ReactNode } from "react";
import Typography from "@mui/joy/Typography";

export enum TypographyType {
  title = "basic-modal-dialog-title",
  description = "basic-modal-dialog-description",
}
type Props = {
  type?: "title" | "description";
  textColor?: string;
  children: ReactNode;
};

const CostumTypography: FC<Props> = ({
  type = "description",
  textColor,
  children,
}) => {
  return (
    <Typography id={TypographyType[type]} textColor={textColor} component='h2'>
      {children}
    </Typography>
  );
};

export default CostumTypography;
