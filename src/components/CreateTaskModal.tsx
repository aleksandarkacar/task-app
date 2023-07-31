import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Task } from "./interfaces";

const CreateTaskModal = ({ onPost }: { onPost: (newTask: Task) => void }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePost = () => {
    let newPost = { title: title, body: body, isDone: false };
    onPost(newPost);

    setTitle("");
    setBody("");

    handleClose();
  };

  const { t } = useTranslation();

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">
        {t("btn.create")}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            minWidth: 400,
            borderRadius: 8,
          }}
        >
          <Typography variant="h6" gutterBottom>
            {t("modal.title")}
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Typography variant="h6" gutterBottom>
            {t("modal.body")}
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Button
            onClick={handlePost}
            variant="contained"
            color="primary"
            sx={{ mr: 2 }}
          >
            {t("modal.submit")}
          </Button>
          <Button onClick={handleClose} variant="outlined">
            {t("modal.cancel")}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateTaskModal;
