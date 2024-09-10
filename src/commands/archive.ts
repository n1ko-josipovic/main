const createArchive = (): string[] => {
    return [
        "<br>",
        "&nbsp;<span class='lowlighted'>Arhiv</span><br>",
        "&nbsp;&nbsp;&nbsp;└─ <span style='text-decoration: underline;'>I. razred</span><br>",
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\I. razred\\\\UIP")'>UIP</span><br>`,
        "&nbsp;&nbsp;&nbsp;└─ <span style='text-decoration: underline;'>II. razred</span><br>",
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\II. razred\\\\POR")'>POR</span><br>`,
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\II. razred\\\\UUBP")'>UUBP</span><br>`,
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\II. razred\\\\UURM")'>UURM</span><br>`,
        "&nbsp;&nbsp;&nbsp;└─ <span style='text-decoration: underline;'>III. razred</span><br>",
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\III. razred\\\\DBP")'>DBP</span><br>`,
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\III. razred\\\\GR")'>GR</span><br>`,
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\III. razred\\\\MIK")'>MIK</span><br>`,
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\III. razred\\\\OS")'>OS</span><br>`,
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\III. razred\\\\RM")'>RM</span><br>`,
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\III. razred\\\\SJWP")'>SJWP</span><br>`,
        "<br>",
    ];
};

export const ARCHIVE = createArchive();
