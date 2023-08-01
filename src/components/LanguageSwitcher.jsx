import { useTranslation } from "react-i18next";
import { Button, Stack } from "@mui/material";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={() => handleChangeLanguage("en")}>
        {t("btn.english")}
      </Button>
      <Button variant="outlined" onClick={() => handleChangeLanguage("es")}>
        {t("btn.spanish")}
      </Button>
    </Stack>
  );
};

export default LanguageSwitcher;
