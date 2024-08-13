const createCd = (): string[] => {
    return [
        "<br>",
        "Naredba <span class='command'>'cd'</span> ispisuje sadržaj odabranog direktorija.",
        "Samo direktoriji pisani velikim slovima - <span class='command'>'tree'</span>",
        "<br>",
        "&nbsp;Sintaksa:",
        "&nbsp;&nbsp;→ cd &lt;direktorij&gt;",
        "<br>",
        "&nbsp;Primjer:",
        "&nbsp;&nbsp;→ cd UURM",
        "<br>",
        "&nbsp;Ispis:",
        "&nbsp;&nbsp;→ Laboratorijske vježbe:",
        "&nbsp;&nbsp;&nbsp;&nbsp;→ LV1",
        "&nbsp;&nbsp;&nbsp;&nbsp;→ LV2",
        "&nbsp;&nbsp;&nbsp;&nbsp;→ ...",
        "<br>"
    ]
}

export const CD = createCd();
