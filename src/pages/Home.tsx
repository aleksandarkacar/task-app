import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Typography,
  Stack,
  ThemeProvider,
  createTheme,
  Container,
  Box,
} from "@mui/material";

import { TaskCard } from "../components/TaskCard";
import CreateTaskModal from "../components/CreateTaskModal";

import Navbar from "../components/Navbar";

import { Task } from "../components/interfaces";
import LanguageSwitcher from "../components/LanguageSwitcher";

const defaultTheme = createTheme();

function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { t } = useTranslation();

  function handlePost(newTask: Task): void {
    setTasks([...tasks, newTask]);
  }

  function handleDelete(index: number): void {
    let updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function handleIsDone(index: number): void {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
  }
  console.log(t);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container>
          <LanguageSwitcher />
          <Typography component={"h1"} align="center">
            {t("app.layout")}
          </Typography>
          <Stack justifyContent="center">
            <CreateTaskModal onPost={handlePost} />
          </Stack>
        </Container>
      </Box>
      <Stack spacing={2} direction={"column-reverse"} alignItems={"center"}>
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            index={index}
            onDelete={handleDelete}
            onIsDone={handleIsDone}
          />
        ))}
      </Stack>
    </ThemeProvider>
  );
}

export default Home;
