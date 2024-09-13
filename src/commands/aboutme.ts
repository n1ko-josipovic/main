import command from '../../config.json' assert { type: 'json' };

const SHADOW = "text-shadow-style";
const ARROW_COLOR = "color-[#70FDFF]";

const createSpaces = (count: number) => '&nbsp;'.repeat(count);

const createAboutMe = (): string[] => {
  const about: string[] = [];

  about.push("<br>");
  about.push(`<p>&nbsp;${command.aboutGreeting} Ja sam <span class="lowlighted">Niko Josipović</span></p>`);
  about.push("<br>");

  about.push(`&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;Tehnička škola Ruđera Boškovića`);
  about.push(`&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;Tehničar za računalstvo`);
  about.push("<br>");
  about.push(`&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;III. godina (24/25), odjel B`);
  about.push(`&nbsp;&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;Redni broj: 9`);
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