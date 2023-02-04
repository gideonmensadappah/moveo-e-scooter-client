import { FC, ReactNode } from "react";

import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import CostumButton from "../Button/index";

type Props = {
  onClose?: () => void;
  modalState: boolean;
  children: ReactNode;
};

const CostumModal = ({ onClose, modalState, children }: Props) => {
  return (
    <>
      <Modal open={modalState} onClose={onClose}>
        <ModalDialog
          aria-labelledby='basic-modal-dialog-title'
          aria-describedby='basic-modal-dialog-description'
          sx={{ maxWidth: 500 }}
        >
          {children}
        </ModalDialog>
      </Modal>
    </>
  );
};

export default CostumModal;

type TextProps = {
  children: ReactNode;
};

const Text: FC<TextProps> = ({ children }) => {
  return <>{children}</>;
};

CostumModal.Text = Text;
CostumModal.ConfirmButton = CostumButton;
