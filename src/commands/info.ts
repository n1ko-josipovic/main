const today = new Date().toISOString().split('T')[0];

export const INFO = (): void => {
    const data = {
        versions: [
            { version: "v.1", start: "2023-9-11", end: "2023-11-14", name: "The-Web" },
            { version: "v.2", start: "2023-11-15", end: "2024-8-27", name: "WebSphere" },
            { version: "v.3", start: "2024-8-10", end: today, name: "Joska" }
        ],
        changeLog: [
            {
                version: "v.3.0.0",
                date: "10/8/2024",
                changes: [
                    "Novo WEB sjedište!",
                ]
            },
            {
                version: "v.3.0.1",
                date: "16/8/2024 - 29/9/2024",
                changes: [
                    "Promijenjen izgled WEB sjedišta!",
                    "Promijenjena README.md datoteka.",
                    "Promijenjen izgled 'aboutme' naredbe.",
                    "",
                    "Dodana stavka 'version' u config.json datoteci.",
                    "Dodan SEO (Search Engine Optimization)!",
                    "",
                    "Nova naredba, 'password'!",
                    "Nova naredba, 'time'!",
                    "Nova naredba, 'translate'!",
                    "Nova naredba, 'weather'!",
                    "",
                    "Poboljšana 'echo' naredba.",
                    "Poboljšana 'info' naredba.",
                    "...",
                ]
            },
            {
                version: "v.3.0.2",
                date: "29/9/2024 - 10/3/2025",
                changes: [
                    "Promijenjen dizajn školskog repozitorij!",
                    "Ispis 'help' naredba podijeljen u dvije: 'help' i 'help+'.",
                    "Promijenjen rad 'password' naredbe.",
                    "Cjelokupno poboljšanje koda WEB sjedišta.",
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
    setTimeout(() => {
        link.click();
    }, 500);


    document.body.removeChild(link);
}