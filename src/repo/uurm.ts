const createUurm = (): string[] => {
    const ARROW_COLOR = "color-[#70FDFF]";
    const HIGHLIGHTED = "highlighted";
    const LOWLIGHTED = "lowlighted";
    const SHADOW = "text-shadow-style";
    const SPACE = "&nbsp;";

    return [
        "<br>",
        `&nbsp;<a href="http://kristinka-blazeka-blog.from.hr/" target="_blank" class="no-hover" style="text-decoration: none;"><span class='${HIGHLIGHTED}'>Uvod u računalne mreže</span></a>`,
        "<br>",
        `&nbsp;<span class='${LOWLIGHTED}'>Laboratorijske vježbe:</span>`,
        "<br>",
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/2. razred/UURM/LV02.pdf" target="_blank">LV02 - Uvod u korištenje mrežnog simulatora</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/2. razred/UURM/LV03.pdf" target="_blank">LV03 - Topologija računalne mreže u laboratoriju</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/2. razred/UURM/LV04.pdf" target="_blank">LV04 - Izrada i ispitivanje mrežnih kabela</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/2. razred/UURM/LV05.pdf" target="_blank">LV05 - Osnovne mrežne postavke računala</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/2. razred/UURM/LV06.pdf" target="_blank">LV06 - Konfiguracija mreže ravnopravnih korisnika</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/2. razred/UURM/LV07.pdf" target="_blank">LV07 - Enkapsulacija podataka kroz slojeve OSI modela</a>`,
        "<br>",
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/2. razred/UURM/LV09.pdf" target="_blank">LV09 - Osnove konfiguriranja preklopnika</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/2. razred/UURM/LV10.pdf" target="_blank">LV10 - Jednostavna preklopnički orijentirana mreža</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/2. razred/UURM/LV11.pdf" target="_blank">LV11 - Konzolni pristup i osnovna konfiguracija preklopnika</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/2. razred/UURM/LV12.pdf" target="_blank">LV12 - Konfiguracija VLAN-a</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/2. razred/UURM/LV13.pdf" target="_blank">LV13 - Napredno korištenje naredbe ping i tracert</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/2. razred/UURM/LV14.pdf" target="_blank">LV14 - ICMP i ARP paketi</a>`,
        "<br>",
        `&nbsp;<span class='${LOWLIGHTED}'>Seminarski rad:</span>`,
        "<br>",
        `&nbsp;&nbsp;<a href="https://github.com/n1ko-josipovic/morse-code" target="_blank">Morse Translator</a>` + SPACE.repeat(23 - "Morse Translator:".length) + "WEB Morseov koder/dekoder",
        "<br>",
        `&nbsp;<span class='${LOWLIGHTED}'>Ostalo:</span>`,
        "<br>",
        `&nbsp;&nbsp;<a href="repozitorij/2. razred/UURM/Mjerenja u svemiru.pptx" target="_blank">Mjerenja u svemiru</a>`,
        "<br>"
    ]
}

export const UURM = createUurm();
