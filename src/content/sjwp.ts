const createSjwp = (): string[] => {
    const ARROW_COLOR = "color-[#70FDFF]";
    const HIGHLIGHTED = "highlighted";
    const LOWLIGHTED = "lowlighted";
    const SHADOW = "text-shadow-style";

    return [
        "<br>",
        `&nbsp;<a href="http://kristinka-blazeka-blog.from.hr/" target="_blank" class="no-hover" style="text-decoration: none;"><span class='${HIGHLIGHTED}'>Skriptni jezici i WEB programiranje</span></a>`,
        "<br>",
        `&nbsp;&nbsp;<span class='${LOWLIGHTED}'>Laboratorijske vježbe:</span>`,
        "<br>",
        `&nbsp;&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="arhiv/III. razred/SJWP/LV01.pdf" target="_blank">LV01 - Uvod u korištenje mrežnog simulatora</a>`,
        `&nbsp;&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="arhiv/III. razred/SJWP/LV02.docx" target="_blank">LV02 - Skriptni jezici</a>`,
        "<br>",
        `&nbsp;&nbsp;<span class='${LOWLIGHTED}'>Ostalo:</span>`,
        "<br>",
        `&nbsp;&nbsp;&nbsp;<a href="arhiv/III. razred/SJWP/SJWP predložak.docx" target="_blank">SJWP predložak</a>`,
        "<br>"
    ]
}

export const SJWP = createSjwp();
