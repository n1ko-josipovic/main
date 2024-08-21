const createArchive = (): string[] => {
    return [
        "<br>",
        "&nbsp;<strong>Struktura arhiva:</strong><br>",
        "&nbsp;&nbsp;<span class='highlighted'>Arhiv</span><br>",
        "&nbsp;&nbsp;&nbsp;&nbsp;└─ I. razred<br>",
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\I. razred\\\\UIP")'>UIP</span><br>`,
        "&nbsp;&nbsp;&nbsp;&nbsp;└─ II. razred<br>",
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\II. razred\\\\UUBP")'>UUBP</span><br>`,
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\II. razred\\\\UURM")'>UURM</span><br>`,
        "&nbsp;&nbsp;&nbsp;&nbsp;└─ III. razred<br>",
        "<br>",
    ];
};

export const ARCHIVE = createArchive();
