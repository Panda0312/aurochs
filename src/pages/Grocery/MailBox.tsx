import { useRecoilState, useSetRecoilState } from "recoil";

import { CustomButton } from "@/components/common/styled";
import { mailList, mailText } from "@/store/GroceryState";

import { MailList } from "./MailList";
import { BoxHeader, BoxRoot, MessageInput } from "./styled";

export const MailBox = () => {
  const [text, setText] = useRecoilState(mailText);
  const setList = useSetRecoilState(mailList);

  return (
    <BoxRoot>
      <BoxHeader>Mail Box</BoxHeader>
      <div>
        <MessageInput value={text} onChange={e => setText(e.target.value)} />
        <CustomButton
          onClick={() => {
            if (text.length) {
              const newItem: TMailItem = {
                id: `${new Date().getTime()}`,
                createTime: new Date().getTime(),
                content: text,
                status: "",
              };
              setList(list => [...list, newItem]);
            }
          }}
        >
          deliver
        </CustomButton>
      </div>
      <MailList />
    </BoxRoot>
  );
};
