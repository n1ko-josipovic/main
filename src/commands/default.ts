const createDefault = (): string[] => {
  const defaultMsgArr = [
    "<br>",
    "NAREDBA NIJE PRONAĐENA",
    "Upišite naredbu <span class='command'>'help'</span> za prikaz dostupnih naredbi.",
    "<br>"
  ]

  const defaultMsg: string[] = [];

  defaultMsgArr.forEach((ele) => {
    defaultMsg.push(ele);
  })

  return defaultMsg;
}

export const DEFAULT = createDefault();
