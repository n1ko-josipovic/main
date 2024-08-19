const createUip = (): string[] => {
    const HIGHLIGHTED = "highlighted";
    const LOWLIGHTED = "lowlighted";
    const SPACE = "&nbsp;";

    return [
        "<br>",
        `&nbsp;<span class='${HIGHLIGHTED}'>Upotreba informacijske tehnologije u uredskom poslovanju</span>`,
        "<br>",
        `&nbsp;&nbsp;<span class='${LOWLIGHTED}'>Seminarski rad:</span>`,
        "<br>",
        `&nbsp;&nbsp;&nbsp;<a href="arhiv/I. razred/UIP/šah.pdf" target="_blank">Povijest i utjecaj šaha</a>` + SPACE.repeat(5) + "<i>(izmijenjeno)</i>",
        "<br>"
    ]
}

export const UIP = createUip();
