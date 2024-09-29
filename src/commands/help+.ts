const helpObj = {
    "commands": [
        [
            "'banner'",
            "Prikaz natpisa."
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
            "",
            ""
        ],

        [
            "'echo'",
            "Ispis željene poruke."
        ],
        [
            "'password'",
            "Generiranje sigurne zaporke."
        ],
        [
            "'time'",
            "Koliko do praznika."
        ],
        [
            "'translate'",
            "Translate croatian to english."
        ],
        [
            "'weather'",
            "Vremenska prognoza."
        ],
    ],
}

const createHelp_ = (): string[] => {
    const help_: string[] = []
    help_.push("<br>")

    helpObj.commands.forEach((ele) => {
        const SPACE = "&nbsp;";
        let string = "";
        string += SPACE.repeat(1);
        string += "<span class='command'>";
        string += ele[0];
        string += "</span>";
        string += SPACE.repeat(17 - ele[0].length);
        string += ele[1];
        help_.push(string);
    })
    help_.push("<br>");

    return help_
}

export const HELP_ = createHelp_();
