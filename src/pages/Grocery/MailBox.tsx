import { BoxHeader, BoxRoot } from "./styled";

export const MailBox = () => {
  return (
    <BoxRoot>
      <BoxHeader>Mail Box</BoxHeader>
      <div>
        <textarea />
        <button>deliver</button>
      </div>
      <div></div>
    </BoxRoot>
  );
};
