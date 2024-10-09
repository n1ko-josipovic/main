const createRepo = (): string[] => {
    return [
        "<br>",
        `&nbsp;<span class='highlighted' style='color: white'>1.R :</span><span class='mobileRepoElement' onclick='clickInputFunction("/repozitorij/srednja-škola/1. razred/UIP.sh")'>UIP</span>`,
        `&nbsp;<span class='highlighted' style='color: white'>2.R :</span><span class='mobileRepoElement' onclick='clickInputFunction("/repozitorij/srednja-škola/2. razred/UUBP.sh")'>UUBP</span><span class='mobileRepoElement' onclick='clickInputFunction("/repozitorij/srednja-škola/2. razred/UURM.sh")'>UURM</span>`,
        `&nbsp;<span class='highlighted' style='color: white'>3.R :</span><span class='mobileRepoElement' onclick='clickInputFunction("/repozitorij/srednja-škola/3. razred/RM.sh")'>RM</span><span class='mobileRepoElement' onclick='clickInputFunction("/repozitorij/srednja-škola/3. razred/SJWP.sh")'>SJWP</span>`,
        "<br>",
    ];
};

export const REPO = createRepo();
