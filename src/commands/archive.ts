const createArchive = (): string[] => {
    return [
        "<div class='archive-container'>",
        "<br>",

        "<ul>",
        "<li><span class='lowlighted' style='color: #E3F4F4'>I. razred</span>",
        "<ul>",
        `<li><span class='archiveElem' onclick='clickInputFunction("archive\\\\I. razred\\\\UIP")'>UIP</span></li>`,
        "</ul>",
        "</li>",
        "<li><span class='lowlighted' style='color: #E3F4F4'>II. razred</span>",
        "<ul>",
        `<li><span class='archiveElem' onclick='clickInputFunction("archive\\\\II. razred\\\\UUBP")'>UUBP</span></li>`,
        `<li><span class='archiveElem' onclick='clickInputFunction("archive\\\\II. razred\\\\UURM")'>UURM</span></li>`,
        "</ul>",
        "</li>",
        "<li><span class='lowlighted' style='color: #E3F4F4'>III. razred</span>",
        "<ul>",
        `<li><span class='archiveElem' onclick='clickInputFunction("archive\\\\III. razred\\\\RM")'>RM</span></li>`,
        `<li><span class='archiveElem' onclick='clickInputFunction("archive\\\\III. razred\\\\SJWP")'>SJWP</span></li>`,
        "</ul>",
        "</li>",
        "</ul>",
        "<br>",
        "</div>"
    ];
};

export const ARCHIVE = createArchive();
