import React, { ReactNode, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  ThemeProvider,
  createTheme,
  Container,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

import { TaskCard } from "./components/TaskCard";
import CreateTaskModal from "./components/CreateTaskModal";

import { Task } from "./components/interfaces";
import LanguageSwitcher from "./components/LanguageSwitcher";

const defaultTheme = createTheme();

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { t, i18n } = useTranslation();

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
      <AppBar position="sticky">
        <Toolbar>
          <Stack direction="row">
            <Typography variant="h6">{t("nav.title")}</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <main>
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
      </main>
    </ThemeProvider>
  );
}

export default App;
