const createSjwp = (): string[] => {
    const ARROW_COLOR = "color-[#70FDFF]";
    const HIGHLIGHTED = "highlighted";
    const LOWLIGHTED = "lowlighted";
    const SHADOW = "text-shadow-style";

    return [
        "<br>",
        `&nbsp;<a href="http://kristinka-blazeka-blog.from.hr/" target="_blank" class="no-hover" style="text-decoration: none;"><span class='${HIGHLIGHTED}'>Skriptni jezici i WEB programiranje</span></a>`,
        "<br>",
        `&nbsp;<span class='${LOWLIGHTED}'>Laboratorijske vježbe:</span>`,
        "<br>",
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="arhiv/III. razred/SJWP/LV01.pdf" target="_blank">LV01 - WEB preglednici i WEB pretraživači</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="arhiv/III. razred/SJWP/LV02.pdf" target="_blank">LV02 - Skriptni jezici na Internetu</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="arhiv/III. razred/SJWP/LV03.pdf" target="_blank">LV03 - Sustavi boja na zaslonu i pisaču</a>`,
        "<br>",
        `&nbsp;<span class='${LOWLIGHTED}'>Ostalo:</span>`,
        "<br>",
        `&nbsp;&nbsp;<a href="arhiv/III. razred/SJWP/SJWP predložak.docx" target="_blank">SJWP predložak</a>`,
        "<br>"
    ]
}

export const SJWP = createSjwp();
