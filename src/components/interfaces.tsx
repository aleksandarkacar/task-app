export interface Task {
  title: string;
  body: string;
  isDone: boolean;
}

export interface TaskCardProps {
  task: Task;
}
