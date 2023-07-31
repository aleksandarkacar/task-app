import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Task } from "./interfaces";

interface TaskCardProps {
  task: Task;
  index: number;
  onDelete: (index: number) => void;
  onIsDone: (index: number) => void;
}

export const TaskCard = ({
  task,
  index,
  onDelete,
  onIsDone,
}: TaskCardProps) => {
  return (
    <Card sx={{ minWidth: "50%" }}>
      <CardContent
        style={{ textDecoration: task.isDone ? "line-through" : "none" }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {task.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Button
            size="small"
            variant="contained"
            onClick={() => onIsDone(index)}
          >
            {task.isDone ? "Undo" : "Done"}
          </Button>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ border: "2px solid" }}
            onClick={() => onDelete(index)}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
};
