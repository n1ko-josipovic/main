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
        `&nbsp;&nbsp;&nbsp;<span class='${LOWLIGHTED}'>Uvod</span>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV01.pdf" target="_blank">LV01 - WEB preglednici i WEB pretraživači</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV02.pdf" target="_blank">LV02 - Skriptni jezici na Internetu</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV03.pdf" target="_blank">LV03 - Sustavi boja na zaslonu i pisaču</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV04.pdf" target="_blank">LV04 - Definiranje i proces razvoja mrežnog sjedišta</a>`,
        "<br>",
        `&nbsp;&nbsp;&nbsp;<span class='${LOWLIGHTED}'>HTML</span>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV05.pdf" target="_blank">LV05 - Sintaksa i osnovni elementi HTML-a</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV06.pdf" target="_blank">LV06 - HTML stilovi, poveznice i slike</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV07.pdf" target="_blank">LV07 - Liste i tablice</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV08.pdf" target="_blank">LV08 - HTML obrasci</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV09.pdf" target="_blank">LV09 - Meta elementi i putanje za datoteke</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV10.pdf" target="_blank">LV10 - Multimedija</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV11.pdf" target="_blank">LV11 - HTML Semantički elementi i izgled (Layout)</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV12.pdf" target="_blank">LV12 - Izrada mrežnog sjedišta</a>`,
        "<br>",
        `&nbsp;&nbsp;&nbsp;<span class='${LOWLIGHTED}'>CSS</span>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV14.pdf" target="_blank">LV14 - Povezivanje HTML-a i CSS-a, vrste i sintaksa CSS-a</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV15.pdf" target="_blank">LV15 - Vrste selektora i njihova primjena</a>`,
        `&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<a href="repozitorij/3. razred/SJWP/LV16.docx" target="_blank">LV16 - CSS pozadine i uređivanje</a>`,
        "<br>",
        `&nbsp;<span class='${LOWLIGHTED}'>Ostalo:</span>`,
        "<br>",
        `&nbsp;&nbsp;<a href="https://github.com/n1ko-josipovic/main/blob/main/public/repo%20-%20sadr%C5%BEaj/3.%20razred/SJWP/zimski-praznici/zimski-praznici.md" target="_blank">zimski-praznici</a>`,
        `&nbsp;&nbsp;<a href="repozitorij/3. razred/SJWP/SJWP predložak.docx" target="_blank">SJWP predložak</a>`,
        "<br>"
    ]
}

export const SJWP = createSjwp();