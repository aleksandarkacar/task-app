import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const defaultTheme = createTheme();

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar position="sticky">
        <Toolbar>
          <Stack direction="row">
            <Typography variant="h6">{t("nav.title")}</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
