const createUip = (): string[] => {
    const HIGHLIGHTED = "highlighted";
    const LOWLIGHTED = "lowlighted";

    return [
        "<br>",
        `&nbsp;<span class='${HIGHLIGHTED}'>Upotreba informacijske tehnologije u uredskom poslovanju</span>`,
        "<br>",
        `&nbsp;<span class='${LOWLIGHTED}'>Seminarski rad:</span>`,
        "<br>",
        `&nbsp;&nbsp;<a href="arhiv/I. razred/UIP/šah.pdf" target="_blank">Povijest i utjecaj šaha</a>`,
        "<br>"
    ]
}

export const UIP = createUip();
