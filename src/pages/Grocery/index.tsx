import { RecoilRoot } from "recoil";

import { FlexLayout } from "@/components/common/styled";

import { MailBox } from "./MailBox";
import { MilkBox } from "./MilkBox";

const Grocery = () => {
  return (
    <RecoilRoot>
      <FlexLayout>
        <MailBox />
        <MilkBox />
      </FlexLayout>
    </RecoilRoot>
  );
};

export default Grocery;
