const createUubp = (): string[] => {
    const HIGHLIGHTED = "highlighted";
    const LOWLIGHTED = "lowlighted";

    return [
        "<br>",
        `&nbsp;<span class='${HIGHLIGHTED}'>Uvod u baze podataka</span>`,
        "<br>",
        `&nbsp;<span class='${LOWLIGHTED}'>Timski projektni zadatak:</span>`,
        "<br>",
        `&nbsp;&nbsp;<span style="text-decoration: underline;">Članovi:</span>`,
        "<br>",
        `&nbsp;&nbsp;&nbsp;<span>•</span>&nbsp;<a href="https://sites.google.com/view/dorijan-civrag" target='_blank'>Čivrag, Dorijan</a>`,
        `&nbsp;&nbsp;&nbsp;<span>•</span>&nbsp;<a href="https://sites.google.com/view/leon-denes" target='_blank'>Đeneš, Leon</a>`,
        `&nbsp;&nbsp;&nbsp;<span>•</span>&nbsp;Josipović, Niko`,
        `&nbsp;&nbsp;&nbsp;<span>•</span>&nbsp;<a href="https://boki01.github.io/home/" target='_blank'>Štefan, Borna</a>`,
        "<br>",
        `&nbsp;&nbsp;<span style="text-decoration: underline;">Tema:</span>`,
        "<br>",
        `&nbsp;&nbsp;&nbsp;<a href="repozitorij/2. razred/UUBP/baza.accde" download>Baza podataka srednjih škola u RH</a>`,
        "<br>",
        `&nbsp;&nbsp;<span>admin, admin123 😉</span>`,
        "<br>"
    ]
}

export const UUBP = createUubp();
