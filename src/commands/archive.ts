const createArchive = (): string[] => {
    return [
        "<br>",
        "&nbsp;Prikaz strukture arhiva.",
        "&nbsp;Za sadržaj kliknite na odabrane direktorija.",
        "<br>",
        "&nbsp;arhiv",
        "&nbsp;&nbsp;└── škola",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── prvi razred<br>",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;└── <span class='command' style='cursor: pointer;'>UIP</span><br>",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── drugi razred<br>",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── <span class='command' style='cursor: pointer;'>POR</span><br>",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;└── <span class='command' style='cursor: pointer;'>UURM</span><br>",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>",
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── treći razred<br>",
        "<br>"
    ];
};

export const ARCHIVE = createArchive();