const createRepo = (): string[] => {
    return [
        `<span class='highlightedRepo' style='margin-top: 15px; color: white'>1. razred</span>`,
        `<span class='mobileRepoElement' onclick='clickInputFunction("/repozitorij/1. razred/UIP.sh")'>UIP</span>`,
        `<span class='highlightedRepo' style='color: white'>2. razred</span>`,
        `<span class='mobileRepoElement' onclick='clickInputFunction("/repozitorij/2. razred/UUBP.sh")'>UUBP</span>`,
        `<span class='mobileRepoElement' onclick='clickInputFunction("/repozitorij/2. razred/UURM.sh")'>UURM</span>`,
        `<span class='highlightedRepo' style='color: white'>3. razred</span>`,
        `<span class='mobileRepoElement' onclick='clickInputFunction("/repozitorij/3. razred/RM.sh")'>RM</span>`,
        `<span class='mobileRepoElement' onclick='clickInputFunction("/repozitorij/3. razred/SJWP.sh")'>SJWP</span>`,
        "<br>"
    ];
};

export const REPO = createRepo();
