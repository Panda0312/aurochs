import { useRecoilState } from "recoil";

import { mailList } from "@/store/GroceryState";

import { MailItem } from "./MailItem";

export const MailList = () => {
  const [list, setList] = useRecoilState(mailList);
  return (
    <div>
      {list.map(item => (
        <MailItem
          key={item.id}
          value={item}
          recall={id =>
            setList(list => {
              const index = list.findIndex(item => item.id === id);
              return [...list.slice(0, index), ...list.slice(index + 1)];
            })
          }
        />
      ))}
    </div>
  );
};
