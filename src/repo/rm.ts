interface LinkItem {
    text: string;
    url: string;
    description?: string;
    status: 'completed' | 'incompleted' | null;
}

const createRm = (): string[] => {
    const CLASS_NAMES = {
        highlighted: 'highlighted',
        lowlighted: 'lowlighted',
    };
    const NON_BREAKING_SPACE = '\u00A0';

    const BULLET_STYLES = {
        base: 'font-size: 1.6em; margin-right: 5px; vertical-align: -0.1em;',
        completed: 'color: #32de84;',
        incompleted: 'color: #ff4444;'
    };

    const br = () => '<br>';

    const link = (text: string, url: string, className?: string) =>
        `${NON_BREAKING_SPACE}<a href="${url}" target="_blank"${className ? ` class="${className}"` : ''} style="text-decoration: none;">${text}</a>`;

    const bulletLink = ({ text, url, status }: LinkItem) => {
        const colorStyle =
            status === 'completed' ? BULLET_STYLES.completed :
                BULLET_STYLES.incompleted;
        if (status === 'incompleted') {
            return `${NON_BREAKING_SPACE.repeat(2)}<span style="${BULLET_STYLES.base} ${colorStyle}">•</span>${NON_BREAKING_SPACE}<a href="#" class="link">${text}</a>`;
        }
        return `${NON_BREAKING_SPACE.repeat(2)}<span style="${BULLET_STYLES.base} ${colorStyle}">•</span>${NON_BREAKING_SPACE}<a href="${url}" class="link" target="_blank">${text}</a>`;
    };

    const titledLink = ({ text, url, description }: LinkItem) => {
        const padding = NON_BREAKING_SPACE.repeat(23 - text.length);
        return `${NON_BREAKING_SPACE.repeat(2)}<a href="${url}" target="_blank">${text}</a>${padding}${description || ''}`;
    };

    const sectionTitle = (text: string) =>
        `${NON_BREAKING_SPACE}<span class="${CLASS_NAMES.lowlighted}">${text}</span>`;

    const labExercises: LinkItem[] = [
        { text: 'LV01 - Enkapsulacija podataka kroz slojeve OSI modela', url: 'repozitorij/3. razred/RM/LV01.pdf', status: 'completed' },
        { text: 'LV02 - Osnovna analiza mrežnog prometa', url: 'repozitorij/3. razred/RM/LV02.pdf', status: 'completed' },
        { text: 'LV03 - Subnetiranje & Subnetiranje pomoću VLSM tehnike', url: 'repozitorij/3. razred/RM/LV03.pdf', status: 'completed' },
        { text: 'LV04 - Prikaz rač. mreže s usmjernikom i preklopnicima', url: 'repozitorij/3. razred/RM/LV04.pdf', status: 'completed' },
        { text: 'LV05 - IPv6 adresiranje', url: 'repozitorij/3. razred/RM/LV05.pdf', status: 'completed' },
        { text: 'LV06 - Konzolni pristup i temeljna konfiguracija usmjernika', url: 'repozitorij/3. razred/RM/LV06.pdf', status: 'completed' },
        { text: 'LV08 - Statičko usmjeravanje', url: 'repozitorij/3. razred/RM/LV08.pdf', status: 'completed' },
        { text: 'LV09 - Konfiguracija RIPv1 protokola', url: 'repozitorij/3. razred/RM/LV09.pdf', status: 'completed' },
        { text: 'LV10 - Konfiguracija protokola OSPF', url: 'repozitorij/3. razred/RM/LV10.docx', status: 'completed' },
        { text: 'LV11 - Protokoli transportnog sloja (TCP i UDP)', url: 'repozitorij/3. razred/RM/LV11.pdf', status: 'completed' },
        { text: 'LV12 - Liste pristupa (ACL) na usmjerniku', url: 'repozitorij/3. razred/RM/LV12.pdf', status: 'completed' },
        { text: 'LV13 - PPP WAN enkapsulacija', url: 'repozitorij/3. razred/RM/LV13.pdf', status: 'incompleted' },
        { text: 'LV14 - Konfiguriranje mobilne žarišne točke i nadzor Wi-Fi mreže', url: '', status: 'incompleted' },
    ];

    const seminars: LinkItem[] = [
        {
            text: 'LCA',
            url: 'https://github.com/n1ko-josipovic/LCA',
            description: 'LAN komunikacijski alat',
            status: null
        },
    ];

    return [
        br(),
        link(`<span class='${CLASS_NAMES.highlighted}'>Računalne mreže</span>`, 'http://kristinka-blazeka-blog.from.hr/', 'no-hover'),
        br(),
        sectionTitle('Laboratorijske vježbe:'),
        br(),
        ...labExercises.map(bulletLink),
        br(),
        sectionTitle('Seminarski rad:'),
        br(),
        ...seminars.map(titledLink),
        br(),
        sectionTitle('Ostalo:'),
        br(),
        `${NON_BREAKING_SPACE.repeat(2)}<a href="repozitorij/3. razred/RM/RM predložak.docx" target="_blank">RM predložak</a>`,
        br()
    ];
};

export const RM = createRm();