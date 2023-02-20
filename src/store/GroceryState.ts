import { atom } from "recoil";

export const mailList = atom<TMailItem[]>({
  key: "MailList",
  default: [],
});

export const mailText = atom<string>({
  key: "MailText",
  default: "",
});
