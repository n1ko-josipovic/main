import command from '../../config.json' assert { type: 'json' };

const createSpaces = (count: number) => '&nbsp;'.repeat(count);

const formatInfo = (label: string, value: string, spaceCount: number) =>
  `${createSpaces(2)}<span class="highlighted">${label}:</span><span>${createSpaces(spaceCount)}${value}</span>`;

const createAboutMe = (): string[] => {
  const about: string[] = [];

  about.push("<br>");
  about.push(`<p>&nbsp;${command.aboutGreeting} Ja sam Niko Josipović</p>`);
  about.push("<br>");

  about.push(formatInfo("Škola", "Tehnička škola Ruđera Boškovića", 15));
  about.push("<br>");
  about.push(formatInfo("Smjer", "Tehničar za računalstvo", 15));
  about.push("<br>");
  about.push(formatInfo("Godina", "III. (2024/25)", 14));
  about.push("<br>");
  about.push(formatInfo("Razredni odjel", "B", 6));
  about.push("<br>");
  about.push(formatInfo("Redni broj", "10", 10));
  about.push("<br>");

  let string = "";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;

  string += createSpaces(1);
  string += email;
  string += createSpaces(17 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  about.push(string);

  string = '';
  string += createSpaces(1);
  string += github;
  string += createSpaces(17 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  about.push(string);
  about.push("<br>");

  return about;
}

export const ABOUTME = createAboutMe();