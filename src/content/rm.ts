const createRm = (): string[] => {
    const ARROW_COLOR = "color-[#70FDFF]";
    const HIGHLIGHTED = "highlighted";
    const LOWLIGHTED = "lowlighted";
    const SHADOW = "text-shadow-style";

    return [
        "<br>",
        `&nbsp;<a href="http://kristinka-blazeka-blog.from.hr/" target="_blank" class="no-hover" style="text-decoration: none;"><span class='${HIGHLIGHTED}'>Računalne mreže</span></a>`,
        "<br>",
        `&nbsp;&nbsp;<span class='${LOWLIGHTED}'>Laboratorijske vježbe:</span>`,
        "<br>",
        `&nbsp;&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="arhiv/III. razred/RM/LV01.docx" target="_blank">LV01 - Enkapsulacija podataka kroz slojeve OSI modela</a>`,
        `&nbsp;&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="arhiv/III. razred/RM/LV02.docx" target="_blank">LV02 - Subnetiranje</a>`,
        "<br>",
        `&nbsp;&nbsp;<span class='${LOWLIGHTED}'>Ostalo:</span>`,
        "<br>",
        `&nbsp;&nbsp;&nbsp;<a href="arhiv/III. razred/RM/RM predložak.docx" target="_blank">RM predložak</a>`,
        "<br>"
    ]
}

export const RM = createRm();
