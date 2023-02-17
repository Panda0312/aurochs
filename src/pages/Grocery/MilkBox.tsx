import { useTranslation } from "react-i18next";

import { BoxHeader, BoxRoot } from "./styled";

export const MilkBox = () => {
  const { t } = useTranslation();

  return (
    <BoxRoot>
      <BoxHeader>{t("grocery_milk_box")}</BoxHeader>
      <div></div>
    </BoxRoot>
  );
};
