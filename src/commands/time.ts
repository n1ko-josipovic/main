const createTime = () => {
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
        rezultati.push(`<span class='lowlighted' style='font-weight: 450;'>${nextPraznik}</span> ~ ${differenceInDays} dana do`);
    } else {
        rezultati.push("Završena nastavna godina!");
    }
    rezultati.push("<br>");

    return rezultati;
};

export const TIME = createTime();
