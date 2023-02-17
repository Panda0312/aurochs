import { FlexLayout } from "@/components/common/styled";

import { useIo } from "./hooks/useIO";
import { MailBox } from "./MailBox";
import { MilkBox } from "./MilkBox";

const Grocery = () => {
  useIo();
  return (
    <FlexLayout>
      <MailBox />
      <MilkBox />
    </FlexLayout>
  );
};

export default Grocery;
