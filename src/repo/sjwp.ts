interface LinkItem {
    text: string;
    url: string;
    description?: string;
    status: 'completed' | 'incompleted' | null;
}

const createSjwp = (): string[] => {
    const CLASS_NAMES = {
        highlighted: 'highlighted',
        lowlighted: 'lowlighted',
    };
    const NON_BREAKING_SPACE = '\u00A0';

    const BULLET_STYLES = {
        base: 'font-size: 1.6em; margin-right: 5px; vertical-align: -0.1em;',
        completed: 'color: #32de84;',
        incompleted: 'color: #ff4444;',
    };

    const br = () => '<br>';

    const link = (text: string, url: string, className?: string) =>
        `${NON_BREAKING_SPACE}<a href="${url}" target="_blank"${className ? ` class="${className}"` : ''} style="text-decoration: none;">${text}</a>`;

    const bulletLink = ({ text, url, status }: LinkItem) => {
        const colorStyle =
            status === 'completed' ? BULLET_STYLES.completed :
                BULLET_STYLES.incompleted;
        return `${NON_BREAKING_SPACE.repeat(2)}<span style="${BULLET_STYLES.base} ${colorStyle}">•</span>${NON_BREAKING_SPACE}<a href="${url}" class="link" target="_blank">${text}</a>`;
    };

    const titledLink = ({ text, url }: LinkItem) =>
        `${NON_BREAKING_SPACE.repeat(2)}<a href="${url}" target="_blank">${text}</a>`;

    const sectionTitle = (text: string) =>
        `${NON_BREAKING_SPACE}<span class="${CLASS_NAMES.lowlighted}">${text}</span>`;

    const subsectionTitle = (text: string) =>
        `${NON_BREAKING_SPACE.repeat(2)}<span class="${CLASS_NAMES.lowlighted}">${text}</span>`;

    const labExercises: { [category: string]: LinkItem[] } = {
        'Uvod': [
            { text: 'LV01 - WEB preglednici i WEB pretraživači', url: 'repozitorij/3. razred/SJWP/LV01.pdf', status: 'completed' },
            { text: 'LV02 - Skriptni jezici na Internetu', url: 'repozitorij/3. razred/SJWP/LV02.pdf', status: 'completed' },
            { text: 'LV03 - Sustavi boja na zaslonu i pisaču', url: 'repozitorij/3. razred/SJWP/LV03.pdf', status: 'completed' },
            { text: 'LV04 - Definiranje i proces razvoja mrežnog sjedišta', url: 'repozitorij/3. razred/SJWP/LV04.pdf', status: 'completed' },
        ],
        'HTML': [
            { text: 'LV05 - Sintaksa i osnovni elementi HTML-a', url: 'repozitorij/3. razred/SJWP/LV05.pdf', status: 'completed' },
            { text: 'LV06 - HTML stilovi, poveznice i slike', url: 'repozitorij/3. razred/SJWP/LV06.pdf', status: 'completed' },
            { text: 'LV07 - Liste i tablice', url: 'repozitorij/3. razred/SJWP/LV07.pdf', status: 'completed' },
            { text: 'LV08 - HTML obrasci', url: 'repozitorij/3. razred/SJWP/LV08.pdf', status: 'completed' },
            { text: 'LV09 - Meta elementi i putanje za datoteke', url: 'repozitorij/3. razred/SJWP/LV09.pdf', status: 'completed' },
            { text: 'LV10 - Multimedija', url: 'repozitorij/3. razred/SJWP/LV10.pdf', status: 'completed' },
            { text: 'LV11 - HTML Semantički elementi i izgled (Layout)', url: 'repozitorij/3. razred/SJWP/LV11.pdf', status: 'completed' },
            {
                text: 'LV12 - Izrada mrežnog sjedišta',
                url: 'repozitorij/3. razred/SJWP/LV12.pdf',
                description: '<a href="https://joska.vercel.app/repozitorij/3.%20razred/SJWP/LV12%20-%20html/index.html" target="_blank">WEB stranica</a>',
                status: 'completed'
            },
        ],
        'CSS': [
            { text: 'LV14 - Povezivanje HTML-a i CSS-a, vrste i sintaksa CSS-a', url: 'repozitorij/3. razred/SJWP/LV14.pdf', status: 'completed' },
            { text: 'LV15 - Vrste selektora i njihova primjena', url: 'repozitorij/3. razred/SJWP/LV15.pdf', status: 'completed' },
            { text: 'LV16 - CSS pozadine i uređivanje', url: 'repozitorij/3. razred/SJWP/LV16.pdf', status: 'completed' },
            { text: 'LV17 - CSS model okvira (box model), tekst, ikone', url: 'repozitorij/3. razred/SJWP/LV17.pdf', status: 'completed' },
            { text: 'LV18 - CSS poveznice, liste i tablice', url: 'repozitorij/3. razred/SJWP/LV18.pdf', status: 'completed' },
            { text: 'LV19 - CSS prikaz, pozicioniranje i prozirnost', url: 'repozitorij/3. razred/SJWP/LV19.pdf', status: 'completed' },
            { text: 'LV20 - CSS layout', url: 'repozitorij/3. razred/SJWP/LV20.pdf', status: 'completed' },
            { text: 'LV21 - Pseudoklase i pseudoelementi', url: 'repozitorij/3. razred/SJWP/LV21.pdf', status: 'incompleted' },
            { text: 'LV22 - Navigacija, izbornici, galerija slika', url: 'repozitorij/3. razred/SJWP/LV22.pdf', status: 'incompleted' },
            { text: 'LV23 - CSS media queries i flexbox layout modul', url: 'repozitorij/3. razred/SJWP/LV23.pdf', status: 'incompleted' },
            { text: 'LV24 - CSS prijelazi (tranzicije)', url: 'repozitorij/3. razred/SJWP/LV24.pdf', status: 'incompleted' },
            { text: 'LV25 - CSS obrasci (forms), brojači (counters), web izgled (layout)', url: 'repozitorij/3. razred/SJWP/LV25.docx', status: 'completed' },
            { text: 'LV26 - CSS responzivni web dizajn', url: 'repozitorij/3. razred/SJWP/LV26.pdf', status: 'incompleted' },
            { text: 'LV27 - Izrada responzivnog mrežnog sjedišta', url: 'repozitorij/3. razred/SJWP/LV27.docx', status: 'incompleted' },
        ],
    };

    const others: LinkItem[] = [
        { text: 'fašnik', url: 'https://github.com/n1ko-josipovic/main/blob/main/public/repozitorij/3.%20razred/SJWP/fašnik/fašnik.md', status: null },
        { text: 'zimski-praznici', url: 'https://github.com/n1ko-josipovic/main/blob/main/public/repozitorij/3.%20razred/SJWP/zimski-praznici/zimski-praznici.md', status: null },
        { text: 'SJWP predložak', url: 'repozitorij/3. razred/SJWP/SJWP predložak.docx', status: null },
    ];

    return [
        br(),
        link(`<span class='${CLASS_NAMES.highlighted}'>Skriptni jezici i WEB programiranje</span>`, 'http://kristinka-blazeka-blog.from.hr/?page_id=1615', 'no-hover'),
        br(),
        sectionTitle('Laboratorijske vježbe:'),
        br(),
        ...Object.entries(labExercises).flatMap(([category, exercises]) => [
            subsectionTitle(category),
            ...exercises.map(item =>
                item.description
                    ? `${NON_BREAKING_SPACE.repeat(2)}<span style="${BULLET_STYLES.base} ${BULLET_STYLES.completed}">•</span>${NON_BREAKING_SPACE}<a href="${item.url}" target="_blank">${item.text}</a> - ${item.description}`
                    : bulletLink(item)
            ),
            br(),
        ]),
        sectionTitle('Ostalo:'),
        br(),
        ...others.map(titledLink),
        br(),
    ];
};

export const SJWP = createSjwp();