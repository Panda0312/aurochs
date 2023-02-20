import moment from "moment";

import { MailItemRoot } from "./styled";

type TProps = {
  value: TMailItem;
  recall: (id: string) => void;
};

export const MailItem = (props: TProps) => {
  const {
    value: { id, createTime },
    recall,
  } = props;

  return (
    <MailItemRoot>
      <div>{moment(createTime).format("yyyy-MMM-DD HH:mm:ss")}</div>
      <button onClick={() => recall(id)}>recall</button>
    </MailItemRoot>
  );
};
