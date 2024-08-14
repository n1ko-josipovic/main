const createAd = (): string[] => {
    return [
        "<br>",
        "Naredba <span class='command'>'ad'</span> pristupa i ispisuje sadržaj direktorija.",
        "Dostupni direktoriji su pisani velikim slovima - <span class='command'>'tree'</span>",
        "<br>",
        "&nbsp;Sintaksa:",
        "&nbsp;&nbsp;→ ad &lt;direktorij&gt;",
        "<br>",
        "&nbsp;Primjer:",
        "&nbsp;&nbsp;→ ad UURM",
        "<br>",
        "&nbsp;Ispis:",
        "&nbsp;&nbsp;→ Laboratorijske vježbe:",
        "&nbsp;&nbsp;&nbsp;&nbsp;→ LV1",
        "&nbsp;&nbsp;&nbsp;&nbsp;→ LV2",
        "&nbsp;&nbsp;&nbsp;&nbsp;→ ...",
        "<br>"
    ]
}

export const AD = createAd();
