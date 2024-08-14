const helpObj = {
  "commands": [
    [
      "'ad'",
      "Pristup direktorijima."
    ],
    [
      "'tree'",
      "Prikaz strukture direktorija."
    ],
    [
      "",
      "<br>"
    ],
    [
      "'about'",
      "Osnovni podaci o meni i mom web sjedištu.",
    ],
    [
      "'banner'",
      "Prikaz 'transparenta'."
    ],
    [
      "'echo'",
      "Ispis upisane poruke - echo &lt;poruka&gt;."
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
      "'projects'",
      "Lista softverskih projekata."
    ],
    [
      "'repo'",
      "Pregled GitHub repozitorija."
    ],
    [
      "'time'",
      "Najvažnija odbrojavanja."
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
    string += SPACE.repeat(2);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    help.push(string);
  })

  help.push("<br>");
  help.push("Pritisnite <span class='keys'>[Tab]</span> za automatsko dovršavanje naredbe.");
  help.push("Pritisnite <span class='keys'>[Esc]</span> za brisanje linije unosa.");
  help.push("Pritisnite <span class='keys'>[↑][↓]</span> za pomicanje kroz povijest naredbi.");
  help.push("<br>");
  return help
}

export const HELP = createHelp();
