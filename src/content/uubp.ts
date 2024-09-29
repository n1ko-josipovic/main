const createUubp = (): string[] => {
    const HIGHLIGHTED = "highlighted";
    const LOWLIGHTED = "lowlighted";
    const SHADOW = "text-shadow-style";
    const ARROW_COLOR = "color-[#70FDFF]";

    return [
        "<br>",
        `&nbsp;<span class='${HIGHLIGHTED}'>Uvod u baze podataka</span>`,
        "<br>",
        `&nbsp;<span class='${LOWLIGHTED}'>Timski projektni zadatak:</span>`,
        "<br>",
        `&nbsp;&nbsp;<span style="text-decoration: underline;">Članovi:</span>`,
        "<br>",
        `&nbsp;&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span><a href="https://sites.google.com/view/dorijan-civrag" class="no-hover" style="color: #F8DDE5; text-decoration: none;" target='_blank'> Čivrag, Dorijan</a>`,
        `&nbsp;&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span><a href="https://sites.google.com/view/leon-denes" class="no-hover" style="color: #F8DDE5; text-decoration: none;" target='_blank'> Đeneš, Leon</a>`,
        `&nbsp;&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span> Josipović, Niko (voditelj)`,
        `&nbsp;&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span><a href="https://boki01.github.io/home/" class="no-hover" style="color: #F8DDE5; text-decoration: none;" target='_blank'> Štefan, Borna</a>`,
        "<br>",
        `&nbsp;&nbsp;<span style="text-decoration: underline;">Tema:</span>`,
        "<br>",
        `&nbsp;&nbsp;&nbsp;<a href="arhiv/II. razred/UUBP/baza.accde" download>Baza podataka srednjih škola u RH</a>`,
        "<br>",
        `&nbsp;&nbsp;<span>admin, admin123 😉</span>`,
        "<br>"
    ]
}

export const UUBP = createUubp();
