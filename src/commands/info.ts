import command from '../../config.json' assert {type: 'json'};

const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).substr(2);
    return `${day}/${month}/${year}`;
};

const getTomorrowDate = (): string => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return formatDate(tomorrow);
};

const HIGHLIGHTED = "highlighted";
const LOWLIGHTED = "lowlighted";
const COMMAND = "command";
const SHADOW = "text-shadow-style";
const ARROW_COLOR = "color-[#70FDFF]";

const versions = [
    { version: "v.1", start: "11/09/23", end: "14/11/23", name: "The-Web" },
    { version: "v.2", start: "15/11/23", end: "27/08/24", name: "WebSphere" },
    { version: "v.3", start: "10/08/24", end: getTomorrowDate(), name: "NN" }
];

const basicInfo = [
    "<br>",
    `&nbsp;<span class='${HIGHLIGHTED}'>WEB sjedište ${command.version}</span>`,
    "<br>",
    ...versions.map(v => `&nbsp;&nbsp;<span class='${LOWLIGHTED}'>${v.version}:</span>&nbsp;&nbsp;${v.start} - ${v.end}&nbsp;|&nbsp;${v.name}`)
];

const changeLog = [
    {
        version: "v.3.0.1",
        date: "16/8/2024",
        changes: [
            "Promijenjena README.md datoteka.",
            `Poboljšana <span class='${COMMAND}'>'echo'</span> naredba.`
        ]
    },
    {
        version: "v.3.0.2",
        date: "18/8/2024",
        changes: [
            "Dodana stavka 'version' u config.json datoteci.",
            `Izmijenjen izgled <span class='${COMMAND}'>'info'</span> naredbe.`,
            `Dodana nova značajka.`
        ]
    },
    {
        version: "v.3.0.3",
        date: "27/8/2024",
        changes: [
            "Promijenjen način rada sata."
        ]
    },
    {
        version: "v.3.1.0",
        date: "9/9/2024",
        changes: [
            `Nova naredba, <span class='${COMMAND}'>'time'</span>!`,
            `Izmijenjen izgled <span class='${COMMAND}'>'aboutme'</span> naredbe.`,
            "..."
        ]
    },
    {
        version: "v.3.1.1",
        date: "10/9/2024",
        changes: [
            `Proširena naredba <span class='${COMMAND}'>'archive'</span> uz malu preinaku dizajna.`,
        ]
    },
    {
        version: "v.3.2.0",
        date: "13/9/2024",
        changes: [
            `U potpunosti promijenjen izgled WEB sjedišta!`,
            `Izbrisan sat.`
        ]
    },
    {
        version: "v.3.2.1",
        date: "14/9/2024",
        changes: [
            `Dodan SEO (Search Engine Optimization)!`,
            `Nova naredba, <span class='${COMMAND}'>'weather'</span>!`,
            `Promijenjena naredba, <span class='${COMMAND}'>'time'</span>.`
        ]
    },
    {
        version: "v.3.2.2",
        date: "21/9/2024",
        changes: [
            `Nova naredba, <span class='${COMMAND}'>'translate'</span>!`
        ]
    }
];

const createInfo = (): string[] => {
    const info: string[] = [
        ...basicInfo,
        "<br>",
        ...changeLog.flatMap(log => [
            `&nbsp;&nbsp;<span style="text-decoration: underline;">${log.version}</span> (${log.date}):`,
            ...log.changes.map(change => `&nbsp;&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;${change}`),
            "<br>"
        ])
    ];

    return info;
};

export const INFO = createInfo();

