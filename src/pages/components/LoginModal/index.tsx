import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  useTheme,
} from "@mui/material";
import Login from "../Login";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginModal = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  const onClose = () => {
    setIsOpen(false);
    props.setOpen(false);
  };

  useEffect(() => {
    return setIsOpen(props.open);
  }, [props]);

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        fullWidth
        sx={{ width: { sm: "100vw" } }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {name.length > 0 ? null : (
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <DialogTitle>Login</DialogTitle>
              <DialogContentText>
                New customer?<Link color="secondary">Register here</Link>
              </DialogContentText>
            </div>
          )}

          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",

              color: "#1f1f1f",
              right: 20,
              top: 3,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent>
          {name ? (
            <div>
              <Typography textAlign={"center"} fontSize={"2.5rem"}>
                Welcome, {name}
              </Typography>
            </div>
          ) : (
            <Login setInfo={(v: any) => setName(v)} />
          )}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
export default LoginModal;
