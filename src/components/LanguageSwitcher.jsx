import { useTranslation } from "react-i18next";
import { Button, Stack } from "@mui/material";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={() => handleChangeLanguage("en")}>
        English
      </Button>
      <Button variant="outlined" onClick={() => handleChangeLanguage("es")}>
        Español
      </Button>
    </Stack>
  );
};

export default LanguageSwitcher;
