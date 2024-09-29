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

export const downloadINFO = (): void => {
    const data = {
        versions: [
            { version: "v.1", start: "11/09/23", end: "14/11/23", name: "The-Web" },
            { version: "v.2", start: "15/11/23", end: "27/08/24", name: "WebSphere" },
            { version: "v.3", start: "10/08/24", end: getTomorrowDate(), name: "NN" }
        ],
        changeLog: [
            {
                version: "v.3.0.1",
                date: "16/8/2024",
                changes: [
                    "Promijenjena README.md datoteka.",
                    "Poboljšana 'echo' naredba."
                ]
            },
            {
                version: "v.3.0.2",
                date: "18/8/2024",
                changes: [
                    "Dodana stavka 'version' u config.json datoteci.",
                    "Izmijenjen izgled 'info' naredbe.",
                    "Dodana nova značajka."
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
                    "Nova naredba, 'time'!",
                    "Izmijenjen izgled 'aboutme' naredbe.",
                    "..."
                ]
            },
            {
                version: "v.3.1.1",
                date: "10/9/2024",
                changes: [
                    "Proširena naredba 'archive' uz malu preinaku dizajna."
                ]
            },
            {
                version: "v.3.2.0",
                date: "13/9/2024",
                changes: [
                    "U potpunosti promijenjen izgled WEB sjedišta!",
                    "Izbrisan sat."
                ]
            },
            {
                version: "v.3.2.1",
                date: "14/9/2024",
                changes: [
                    "Dodan SEO (Search Engine Optimization)!",
                    "Nova naredba, 'weather'!",
                    "Promijenjena naredba, 'time'."
                ]
            },
            {
                version: "v.3.2.2",
                date: "21/9/2024",
                changes: [
                    "Nova naredba, 'translate'!"
                ]
            },
            {
                version: "v.3.2.3",
                date: "29/9/2024",
                changes: [
                    "Promijenjen sustav boja WEB sjedišta!",
                    "Nova naredba, 'password'!"
                ]
            }
        ]
    };

    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "versions-log.json";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}
