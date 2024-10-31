const createRm = (): string[] => {
    const ARROW_COLOR = "color-[#70FDFF]";
    const HIGHLIGHTED = "highlighted";
    const LOWLIGHTED = "lowlighted";
    const SHADOW = "text-shadow-style";

    return [
        "<br>",
        `&nbsp;<a href="http://kristinka-blazeka-blog.from.hr/" target="_blank" class="no-hover" style="text-decoration: none;"><span class='${HIGHLIGHTED}'>Računalne mreže</span></a>`,
        "<br>",
        `&nbsp;<span class='${LOWLIGHTED}'>Laboratorijske vježbe:</span>`,
        "<br>",
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repo - sadržaj/3. razred/RM/LV01.pdf" target="_blank">LV01 - Enkapsulacija podataka kroz slojeve OSI modela</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repo - sadržaj/3. razred/RM/LV02.pdf" target="_blank">LV02 - Osnovna analiza mrežnog prometa</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repo - sadržaj/3. razred/RM/LV03.pdf" target="_blank">LV03 - Subnetiranje & Subnetiranje pomoću VLSM tehnike</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repo - sadržaj/3. razred/RM/LV04.docx" target="_blank">LV04 - Prikaz računalne mreže s usmjernikom i preklopnicima</a>`,
        "<br>",
        `&nbsp;<span class='${LOWLIGHTED}'>Ostalo:</span>`,
        "<br>",
        `&nbsp;&nbsp;<a href="repo - sadržaj/3. razred/RM/RM predložak.docx" target="_blank">RM predložak</a>`,
        "<br>"
    ]
}

export const RM = createRm();
