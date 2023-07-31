import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  ThemeProvider,
  createTheme,
  Container,
} from '@mui/material';

const defaultTheme = createTheme();

const Navbar: React.FC = () => {
  return (<ThemeProvider theme={defaultTheme}>
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
            <DeleteIcon></DeleteIcon>
        </IconButton>
        <Stack direction='row'>
            <Typography variant="h6">
            TaskApp
            </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
    <main>
        <Container>
            <Typography component={"h1"}>
                TaskAppLayout
            </Typography>
        </Container>
    </main>

  </ThemeProvider>
  );
};

export default Navbar;
