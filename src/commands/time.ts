const createTime = () => {
    const SPACE = "&nbsp;";
    const SHADOW = "text-shadow-style";
    const ARROW_COLOR = "color-[#70FDFF]";

    const praznici = {
        "Svi sveti": "01. 11.",
        "Dan sjećanja": "18. 11.",
        "I. zimski praznici": "23. 12.",
        "II. zimski praznici": "24. 01.",
        "Proljetni praznici": "17. 04.",
        "Praznik rada": "01. 05.",
        "Dan državnosti": "30. 05.",
        "Zadnji dan": "13. 06.",
    };

    const rezultati = ["<br>"];
    let nextPraznik = "";
    let nextPraznikDate = null;
    let differenceSaved = 0;

    rezultati.push("&nbsp;Nastavna godina: 24/25.");
    rezultati.push("<br>");

    for (const [praznik, datum] of Object.entries(praznici)) {
        const [day, month] = datum.split('.').map(Number);
        const praznikDate = new Date(month > 8 ? 2024 : 2025, month - 1, day);
        const today = new Date();
        const difference = Number(praznikDate) - Number(today);

        if (difference > 0) {
            rezultati.push(`&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;<span class='lowlighted'>${praznik}</span>` + SPACE.repeat(23 - praznik.length) + `${datum}`);
        }

        if (nextPraznik === "" && nextPraznikDate === null) {
            nextPraznik = praznik;
            nextPraznikDate = praznikDate;
            differenceSaved = Math.ceil(difference / (1000 * 60 * 60 * 24));
        }
    }

    rezultati.push("<br>");
    if (nextPraznikDate) {
        rezultati.push(`&nbsp;Sljedeće: <span class='highlighted'>${nextPraznik}</span> ~ ${differenceSaved} dana do`);
    } else {
        rezultati.push("&nbsp;Završena nastavna godina!");
    }
    rezultati.push("<br>");

    return rezultati;
};

export const TIME = createTime();
