const aDay = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);

    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
};

const basicInfo = `
    <br>
    &nbsp;<span class='bold-font'>Trenutna verzija v.3.0.1</span><br>
    <br>
    &nbsp;&nbsp;→&nbsp;<span class='bold-font'>v.1:</span>&nbsp;&nbsp;11/09/2023 - 14/11/2023 &nbsp;(The-Web)<br>
    &nbsp;&nbsp;→&nbsp;<span class='bold-font'>v.2:</span>&nbsp;&nbsp;15/11/2023 - 09/08/2024 &nbsp;(WebSphere)<br>
    &nbsp;&nbsp;→&nbsp;<span class='bold-font'>v.3:</span>&nbsp;&nbsp;10/08/2024 - ${aDay()} &nbsp;(NN)<br>
`;

const v_3_0_1 = `
    &nbsp;&nbsp;<span class='bold-font'>v.3.0.1 (16/8/2024):</span><br>
    &nbsp;&nbsp;&nbsp;→&nbsp; Dodane <span class='command'>'aboutme'</span> i <span class='command'>'info'</span> naredbe.<br>
    &nbsp;&nbsp;&nbsp;→&nbsp; Izmijenjena README.md datoteka.<br>
    &nbsp;&nbsp;&nbsp;→&nbsp; Poboljšan rad <span class='command'>'echo'</span> naredbe.<br>
    <br>
`;


const createInfo = (): string[] => {
    const info: string[] = [
        basicInfo,
        "<br>",
        "&nbsp;<span class='bold-font'>Zapisnik o izmjenama:</span>",
        "<br>",
        v_3_0_1,
    ];

    return info;
}

export const INFO = createInfo();
