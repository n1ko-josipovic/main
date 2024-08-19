const createArchive = (): string[] => {
    return [
        "<br>",
        "&nbsp;<strong>Struktura arhiva:</strong><br>",
        "&nbsp;&nbsp;<span class='highlighted'>Arhiv</span><br>",
        "&nbsp;&nbsp;&nbsp;&nbsp;└─ I. razred<br>",
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\UIP")'>UIP</span><br>`,
        "&nbsp;&nbsp;&nbsp;&nbsp;└─ II. razred<br>",
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\UUBP")'>UUBP</span><br>`,
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\UURM")'>UURM</span><br>`,
        "&nbsp;&nbsp;&nbsp;&nbsp;└─ III. razred<br>",
        "<br>",
    ];
};

export const ARCHIVE = createArchive();
