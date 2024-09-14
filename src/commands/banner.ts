import command from '../../config.json' assert {type: 'json'};

const createBanner = (): string[] => {
  const banner: string[] = [];
  banner.push("<br>")
  command.ascii.forEach((ele) => {
    let bannerString = "";
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }

    let eleToPush = `<pre>${bannerString}</pre>`;
    banner.push(eleToPush);
  });
  banner.push("<br>");
  banner.push(`Dobrodošli u <span class='lowlighted' style='text-decoration: underline;'>WEB sjedište</span> ${command.version}!`);
  banner.push("<br>");
  banner.push(`Upišite <span class='command' onclick='clickInputFunction("help")' style="cursor: pointer;">'help'</span> za popis svih dostupnih naredbi.`);
  banner.push(`Upišite <a href='${command.repoLink}' class="no-hover" style="text-decoration: none;" target='_blank'><span class='command'>'repo'</span></a> za pregled GitHub repozitorija.`);
  banner.push("<br>");
  return banner;
}

export const BANNER = createBanner();
