const createTime = () => {
    const praznici = {
        "Svih svetih": "01. 11.",
        "Dana sjećanja": "18. 11.",
        "I. zimskih praznika": "23. 12.",
        "II. zimskih praznika": "24. 02.",
        "Proljetnih praznika": "17. 04.",
        "Praznik rada": "01. 05.",
        "Dana državnosti": "30. 05.",
        "Zadnjeg dan": "13. 06.",
    };

    const rezultati = [];
    let nextPraznik = "";
    let differenceInDays = 0;

    for (const [praznik, datum] of Object.entries(praznici)) {
        const [day, month] = datum.split('.').map(Number);
        const praznikDate = new Date(month > 8 ? 2024 : 2025, month - 1, day);
        const today = new Date();

        const difference = Number(praznikDate) - Number(today);

        if (difference > 0 && nextPraznik === "") {
            nextPraznik = praznik;
            differenceInDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
            break;
        }
    }

    if (nextPraznik !== "") {
        rezultati.push(`<span class='highlighted'>${differenceInDays} dana</span> do ${nextPraznik}`);
    } else {
        rezultati.push("Završena 2024./25. nastavna godina!");
    }
    rezultati.push("<br>");

    return rezultati;
};

export const TIME = createTime();
