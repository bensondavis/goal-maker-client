import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";

const ResultDialog = (props) => {
  const { openStatus, onClosing, result } = props;

  const handleClose = () => {
    onClosing(false);
  };

  return (
    <Dialog maxWidth="sm" open={openStatus} onClose={handleClose}>
      <DialogTitle>Result</DialogTitle>
      <DialogContent>
        <DialogContentText>{result}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

ResultDialog.propTypes = {
  result: PropTypes.string.isRequired,
  openStatus: PropTypes.bool.isRequired,
  onClosing: PropTypes.func.isRequired,
};

export default ResultDialog;
