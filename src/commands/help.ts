const helpObj = {
  "commands": [
    [
      "'archive'",
      "Prikaz arhiva."
    ],
    [
      "",
      "<br>"
    ],
    [
      "'aboutme'",
      "Tko sam ja?",
    ],
    [
      "'banner'",
      "Prikaz natpisa."
    ],
    [
      "'echo'",
      "Ispis željene poruke."
    ],
    [
      "'help'",
      "Dostupne naredbe i značajke."
    ],
    [
      "'history'",
      "Prikaz korištenih naredbi."
    ],
    [
      "'info'",
      "O WEB sjedištu.",
    ],
    [
      "'projects'",
      "Popis softverskih projekata."
    ],
    [
      "'repo'",
      "Pregled GitHub repozitorija."
    ],
    [
      "'time'",
      "Koliko do praznika."
    ],
    [
      "'weather'",
      "Vremenska prognoza."
    ],
    [
      "'clear'",
      "Očisti terminal."
    ]
  ],
}

const createHelp = (): string[] => {
  const help: string[] = []
  help.push("<br>")

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(1);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    help.push(string);
  })

  help.push("<br>");
  help.push("&nbsp;Pritisnite <span class='highlighted' style='font-weight: 400 !important;'>[Tab]</span> za automatsko dovršavanje naredbe.");
  help.push("&nbsp;Pritisnite <span class='highlighted' style='font-weight: 400 !important;'>[Esc]</span> za brisanje linije unosa.");
  help.push("&nbsp;Pritisnite <span class='highlighted' style='font-weight: 400 !important;'>[↑][↓]</span> za pomicanje kroz povijest naredbi.");
  help.push("<br>");
  return help
}

export const HELP = createHelp();
