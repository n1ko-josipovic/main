const createArchive = (): string[] => {
    return [
        "<br>",
        "&nbsp;<span class='highlighted'>SŠ arhiv</span><br>",
        "&nbsp;&nbsp;└─ <span class='lowlighted'>I. razred</span><br>",
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\I. razred\\\\UIP")'>UIP</span><br>`,
        "&nbsp;&nbsp;└─ <span class='lowlighted'>II. razred</span><br>",
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\II. razred\\\\UUBP")'>UUBP</span><br>`,
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\II. razred\\\\UURM")'>UURM</span><br>`,
        "&nbsp;&nbsp;└─ <span class='lowlighted'>III. razred</span><br>",

        "<br>",
    ];
};

export const ARCHIVE = createArchive();


/*`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\III. razred\\\\DBP")'>DBP</span><br>`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\III. razred\\\\GR")'>GR</span><br>`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\III. razred\\\\MIK")'>MIK</span><br>`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\III. razred\\\\OS")'>OS</span><br>`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\III. razred\\\\RM")'>RM</span><br>`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⟶ <span class='content' onclick='clickInputFunction("archive\\\\III. razred\\\\SJWP")'>SJWP</span><br>`,*/