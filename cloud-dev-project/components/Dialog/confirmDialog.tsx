import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button, { ButtonPropsColorOverrides } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { OverridableStringUnion } from "@mui/types";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "@/constants";
import { Typography } from "@mui/material";

export interface IParamsConfirm<T> {
  open: boolean;
  data?: T | null;
}

interface IProps {
  open: boolean;
  message?: string | React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: string | undefined;
  cancelColor?:string | undefined;
  onConfirm: () => void;
  onClose: () => void;
  onCancel?: () => void;
  minWidth?: number;
}

const ConfirmDialog = (props: IProps) => {
  const {
    open,
    message = "confirmation text",
    confirmText = "Confirm",
    cancelText = "Cancel",
    confirmColor = COLORS.PRIMARY,
    cancelColor = COLORS.PRIMARY,
    onConfirm,
    onClose,
    onCancel,
  } = props;
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };
  return (
    <Dialog
      open={open}
      sx={{
        "& .MuiDialog-paper": props.minWidth
          ? { minWidth: props.minWidth }
          : {
              width: 400,
              height: 400,
            },
      }}
      PaperProps={{
        sx: {
          justifyContent: "space-between",
        }
      }}
    >
      <DialogTitle
        sx={{ p: 1 }}
        color={"common.white"}
        variant="subtitle1"
        textAlign="end"
      >
        <IconButton aria-label="close" onClick={onClose}>
          <FontAwesomeIcon
            icon={faTimes}
            style={{
              width: 16,
              fontSize: 16,
            }}
          />
        </IconButton>
      </DialogTitle>
      <DialogTitle
        sx={{ px: 5, pt: 0, pb: 4 }}
        variant="subtitle1"
        textAlign="left"
        color={"grey.900"}
        fontWeight={500}
      >
        {message}
      </DialogTitle>
      <DialogActions sx={{ justifyContent: "center", px: 2, pb: 4, pt: 0 }}>
        <Stack sx={{ width: '100%' }} spacing={1} alignItems={'center'}>
          <Button
            variant="contained"
            onClick={handleConfirm}
            sx={{color:confirmColor}}
            fullWidth
          >
            <Typography color={COLORS.WHITE}>{confirmText}</Typography>
          </Button>

          {typeof onCancel === "function" ? (
            <Button variant="outlined" sx={{color:cancelColor}} onClick={onCancel} fullWidth>
              {cancelText}
            </Button>
          ) : null}
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
