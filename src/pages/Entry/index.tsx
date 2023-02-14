import { useTranslation } from "react-i18next";

import { Container } from "@/components/common/styled";

const Entry = () => {
  const { t, i18n } = useTranslation();
  return (
    <Container>
      <div>{t("test")}</div>
      <button
        onClick={() => {
          i18n.language === "en"
            ? i18n.changeLanguage("cn")
            : i18n.changeLanguage("en");
        }}
      >
        Trans
      </button>
    </Container>
  );
};

export default Entry;
