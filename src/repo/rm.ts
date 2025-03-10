const createRm = (): string[] => {
    const HIGHLIGHTED = "highlighted";
    const LOWLIGHTED = "lowlighted";
    const SPACE = "&nbsp;";

    return [
        "<br>",
        `&nbsp;<a href="http://kristinka-blazeka-blog.from.hr/" target="_blank" class="no-hover" style="text-decoration: none;"><span class='${HIGHLIGHTED}'>Računalne mreže</span></a>`,
        "<br>",
        `&nbsp;<span class='${LOWLIGHTED}'>Laboratorijske vježbe:</span>`,
        "<br>",
        `&nbsp;&nbsp;<span>•</span>&nbsp;<a href="repozitorij/3. razred/RM/LV01.pdf" target="_blank">LV01 - Enkapsulacija podataka kroz slojeve OSI modela</a>`,
        `&nbsp;&nbsp;<span>•</span>&nbsp;<a href="repozitorij/3. razred/RM/LV02.pdf" target="_blank">LV02 - Osnovna analiza mrežnog prometa</a>`,
        `&nbsp;&nbsp;<span>•</span>&nbsp;<a href="repozitorij/3. razred/RM/LV03.pdf" target="_blank">LV03 - Subnetiranje & Subnetiranje pomoću VLSM tehnike</a>`,
        `&nbsp;&nbsp;<span>•</span>&nbsp;<a href="repozitorij/3. razred/RM/LV04.pdf" target="_blank">LV04 - Prikaz rač. mreže s usmjernikom i preklopnicima</a>`,
        `&nbsp;&nbsp;<span>•</span>&nbsp;<a href="repozitorij/3. razred/RM/LV05.pdf" target="_blank">LV05 - IPv6 adresiranje</a>`,
        `&nbsp;&nbsp;<span>•</span>&nbsp;<a href="repozitorij/3. razred/RM/LV06.pdf" target="_blank">LV06 - Konzolni pristup i temeljna konfiguracija usmjernika</a>`,
        "<br>",
        `&nbsp;&nbsp;<span>•</span>&nbsp;<a href="repozitorij/3. razred/RM/LV08.pdf" target="_blank">LV08 - Statičko usmjeravanje</a>`,
        `&nbsp;&nbsp;<span>•</span>&nbsp;<a href="repozitorij/3. razred/RM/LV09.pdf" target="_blank">LV09 - Konfiguracija RIPv1 protokola</a>`,
        `&nbsp;&nbsp;<span>•</span>&nbsp;<a href="repozitorij/3. razred/RM/LV10.docx" target="_blank">LV10 - Konfiguracija protokola OSPF</a>`,
        `&nbsp;&nbsp;<span>•</span>&nbsp;<a href="repozitorij/3. razred/RM/LV11.docx" target="_blank">LV11 - Protokoli transportnog sloja (TCP i UDP)</a>`,
        "<br>",
        `&nbsp;<span class='${LOWLIGHTED}'>Seminarski rad:</span>`,
        "<br>",
        `&nbsp;&nbsp;<a href="https://github.com/n1ko-josipovic/LCA" target="_blank">LCA</a>` + SPACE.repeat(23 - "LCA".length) + "Local Chat App",
        "<br>",
        `&nbsp;<span class='${LOWLIGHTED}'>Ostalo:</span>`,
        "<br>",
        `&nbsp;&nbsp;<a href="repozitorij/3. razred/RM/RM predložak.docx" target="_blank">RM predložak</a>`,
        "<br>"
    ]
}

export const RM = createRm();
