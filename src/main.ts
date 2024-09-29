import command from '../config.json' assert {type: 'json'};
import { ABOUTME } from "./commands/aboutme";
import { ARCHIVE } from "./commands/archive";
import { BANNER } from "./commands/banner";
import { DEFAULT } from "./commands/default";
import { HELP } from "./commands/help";
import { HELP_ } from "./commands/help+";
import { downloadINFO } from "./commands/info";
import { PROJECTS } from "./commands/projects";
import { TIME } from "./commands/time";

import { UIP } from "./content/uip";

import { POR } from "./content/por";
import { UUBP } from "./content/uubp";
import { UURM } from "./content/uurm";

import { RM } from "./content/rm";
import { SJWP } from "./content/sjwp";

let mutWriteLines = document.getElementById("write-lines");
let historyIdx = 0
let tempInput = ""
let userInput: string;

const WRITELINESCOPY = mutWriteLines;
const TERMINAL = document.getElementById("terminal");
const USERINPUT = document.getElementById("user-input") as HTMLInputElement;
const PRE_HOST = document.getElementById("pre-host");
const PRE_USER = document.getElementById("pre-user");
const HOST = document.getElementById("host");
const USER = document.getElementById("user");
const PROMPT = document.getElementById("prompt");
const COMMANDS = ["aboutme", "archive", "banner", "echo", "help", "history", "info", "password", "projects", "repo", "time", "translate", "weather", "clear"];
const HISTORY: string[] = [];

const SHADOW = "text-shadow-style";
const ARROW_COLOR = "color-[#70FDFF]";

const REPO_LINK = command.repoLink;

const scrollToBottom = () => {
  const MAIN = document.getElementById("main");
  if (!MAIN) return

  MAIN.scrollTop = MAIN.scrollHeight;
}

function userInputHandler(e: KeyboardEvent) {
  const key = e.key;

  switch (key) {
    case "Enter":
      e.preventDefault();
      enterKey();

      scrollToBottom();
      break;
    case "Escape":
      USERINPUT.value = "";
      break;
    case "ArrowUp":
      arrowKeys(key);
      e.preventDefault();
      break;
    case "ArrowDown":
      arrowKeys(key);
      break;
    case "Tab":
      tabKey();
      e.preventDefault();
      break;
  }
}

function enterKey() {
  if (!mutWriteLines || !PROMPT) return
  const resetInput = "";
  let newUserInput;
  userInput = USERINPUT.value;
  newUserInput = `<span class='output'>${userInput}</span>`;

  HISTORY.push(userInput);
  historyIdx = HISTORY.length

  //if clear then early return
  if (userInput === 'clear' || userInput === 'cls') {
    commandHandler(userInput.toLowerCase().trim());
    USERINPUT.value = resetInput;
    userInput = resetInput;
    return
  }

  const div = document.createElement("div");
  div.innerHTML = `<span id="prompt">${PROMPT.innerHTML}</span> ${newUserInput}`;

  if (mutWriteLines.parentNode) {
    mutWriteLines.parentNode.insertBefore(div, mutWriteLines);
  }

  /*
  if input is empty or a collection of spaces, 
  just insert a prompt before #write-lines
  */
  if (userInput.trim().length !== 0) {
    if (userInput.trimStart().toLowerCase().startsWith("echo ") && userInput.toLowerCase().trim() !== "echo") {
      const message = userInput.trimStart().slice(5);
      writeLines(["<br>", message, "<br>"]);
      USERINPUT.value = resetInput;
      userInput = resetInput;
      return;
    }

    else if (userInput.trimStart().toLowerCase().startsWith("weather ") && userInput.toLowerCase().trim() !== "weather") {
      const weatherCity = userInput.trimStart().slice(8);

      const getWeather = async (city: string) => {
        try {
          const response = await fetch(`https://wttr.in/${city}?ATm`);

          if (!response.ok) {
            throw new Error();
          }

          let weatherData = await response.text();

          let weatherLines = weatherData.split('\n');

          if (window.innerWidth < 1800) {
            weatherLines = weatherLines.slice(0, 7);
          } else {
            weatherLines = weatherLines.slice(0, -3);
            weatherLines[weatherLines.length - 2] += '\n';
          }

          weatherLines = weatherLines.map(line => `&nbsp;${line}`);
          weatherData = `<pre>${weatherLines.join('\n')}</pre>`;
          writeLines(["<br>", weatherData, "<br>"]);

        } catch (error: any) {
          writeLines(["<br>", `&nbsp;Greška u prikupljanju prognoze za grad: <span class='lowlighted'>${city}</span>`, "<br>"]);
        }
      };

      getWeather(weatherCity);

      USERINPUT.value = resetInput;
      userInput = resetInput;
      return;
    }

    else if (userInput.trimStart().toLowerCase().startsWith("translate ") && userInput.toLowerCase().trim() !== "translate") {
      const translateText = userInput.trimStart().slice(10);

      const getTranslation = async (TText: string) => {
        let translationURL = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=hr&tl=en&dt=t&q=${encodeURI(TText)}`;

        try {
          const response = await fetch(translationURL);
          const json = await response.json();

          if (json && json[0]) {
            const translationText = json[0].map((item: any[]) => item[0]).join("");
            const translationData = `<pre style="white-space: pre-wrap;">${translationText}</pre>`;

            writeLines(["<br>", translationData, "<br>"]);

          } else {
            writeLines(["<br>", `&nbsp;Translation not found.`, "<br>"]);
          }
        } catch (error) {
          writeLines(["<br>", `&nbsp;Error in fetching translation.`, "<br>"]);
        }
      };

      getTranslation(translateText);

      USERINPUT.value = resetInput;
      userInput = resetInput;
      return;
    }

    else if (userInput.trimStart().toLowerCase().startsWith("password ") && userInput.toLowerCase().trim() !== "password") {
      const passwordLenght = Number(userInput.trimStart().slice(9)) % 33;
      console.log(passwordLenght);

      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@%&*()_[]{}|;:,.<>?";
      let password = "";

      for (let i = 0; i < passwordLenght; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      console.log(password.length)
      writeLines(["<br>", `&nbsp;Zaporka: <span class='lowlighted' onclick='copyFunction()' id='copyText' style='cursor: pointer;'>${password}</span>`, "<br>"]);

      USERINPUT.value = resetInput;
      userInput = resetInput;
      return;
    }

    else {
      commandHandler(userInput.toLowerCase().trim());
    }
  }

  USERINPUT.value = resetInput;
  userInput = resetInput;
}

function tabKey() {
  let currInput = USERINPUT.value.trimStart();
  const lowerCurrInput = currInput.toLowerCase();

  for (const ele of COMMANDS) {
    if (ele.toLowerCase().startsWith(lowerCurrInput)) {
      USERINPUT.value = ele;
      return;
    }
  }
}


function arrowKeys(e: string) {
  switch (e) {
    case "ArrowDown":
      if (historyIdx !== HISTORY.length) {
        historyIdx += 1;
        USERINPUT.value = HISTORY[historyIdx];
        if (historyIdx === HISTORY.length) USERINPUT.value = tempInput;
      }
      break;
    case "ArrowUp":
      if (historyIdx === HISTORY.length) tempInput = USERINPUT.value;
      if (historyIdx !== 0) {
        historyIdx -= 1;
        USERINPUT.value = HISTORY[historyIdx];
      }
      break;
  }
}

function commandHandler(input: string) {
  switch (input) {
    case 'aboutme':
      writeLines(ABOUTME);
      break;

    case 'archive':
      writeLines(ARCHIVE);
      break;


    case 'archive\\i. razred\\uip':
      writeLines(UIP);
      break;

    case 'archive\\ii. razred\\por':
      writeLines(POR);
      break;
    case 'archive\\ii. razred\\uubp':
      writeLines(UUBP);
      break;
    case 'archive\\ii. razred\\uurm':
      writeLines(UURM);
      break;

    case 'archive\\iii. razred\\rm':
      writeLines(RM);
      break;
    case 'archive\\iii. razred\\sjwp':
      writeLines(SJWP);
      break;

    case 'banner':
      writeLines(BANNER);
      break;

    case 'cls':
    case 'clear':
      setTimeout(() => {
        if (!TERMINAL || !WRITELINESCOPY) return
        TERMINAL.innerHTML = "";
        TERMINAL.appendChild(WRITELINESCOPY);
        mutWriteLines = WRITELINESCOPY;
      })
      break;

    case 'echo':
      writeLines(["<br>", "&nbsp;Korištenje: echo [poruka]. Primjer: echo Pozdrav!", "<br>"]);
      break;

    case 'help':
      writeLines(HELP);
      break;

    case 'help+':
      writeLines(HELP_);
      break;

    case 'history':
      const beforeHistory = document.createElement("p");
      beforeHistory.innerHTML = "<br>";
      if (mutWriteLines && mutWriteLines.parentNode) {
        mutWriteLines.parentNode.insertBefore(beforeHistory, mutWriteLines);
      }

      HISTORY.forEach((item, idx) => {
        setTimeout(() => {
          if (!mutWriteLines) return;

          const p = document.createElement("p");
          p.innerHTML = `&nbsp;<span class='${ARROW_COLOR} ${SHADOW}'>→</span>&nbsp;` + item;
          mutWriteLines.parentNode!.insertBefore(p, mutWriteLines);
          scrollToBottom();
        }, 40 * idx);
      });

      setTimeout(() => {
        const afterHistory = document.createElement("p");
        afterHistory.innerHTML = "<br>";
        if (mutWriteLines && mutWriteLines.parentNode) {
          mutWriteLines.parentNode.insertBefore(afterHistory, mutWriteLines);
        }
        scrollToBottom();
      }, 40 * HISTORY.length);
      break;

    case 'info':
      writeLines(["Preuzimanje versions-log.json datoteke u tijeku...", "<br>"]);
      downloadINFO();
      break;

    case 'password':
      writeLines(["<br>", "&nbsp;Usage: password [duljina]. Example: password 10", "<br>"]);
      break;

    case 'projects':
      writeLines(PROJECTS);
      break;

    case 'repo':
      writeLines(["Preusmjeravanje na github.com...", "<br>"]);
      setTimeout(() => {
        window.open(REPO_LINK, '_blank');
      }, 500);
      break;

    case 'time':
      writeLines(TIME);
      break;

    case 'translate':
      writeLines(["<br>", "&nbsp;Usage: translate [tekst]. Example: translate Pozdrav!", "<br>"]);
      break;

    case 'weather':
      writeLines(["<br>", "&nbsp;Korištenje: weather [grad]. Primjer: weather Zagreb", "<br>"]);
      break;

    default:
      writeLines(DEFAULT);
      break;
  }
}

function writeLines(message: string[]) {
  message.forEach((item, idx) => {
    displayText(item, idx);
  });
}

function displayText(item: string, idx: number) {
  setTimeout(() => {
    if (!mutWriteLines) return
    const p = document.createElement("p");
    p.innerHTML = item;
    mutWriteLines.parentNode!.insertBefore(p, mutWriteLines);
    scrollToBottom();
  }, 40 * idx);
}

function clickInputFunction(clickInput: string) {
  USERINPUT.value = clickInput;
}
(window as any).clickInputFunction = clickInputFunction;

function copyFunction() {
  var copyText = document.getElementById("copyText");
  if (copyText) {
    navigator.clipboard.writeText(copyText.innerHTML);
  }
  alert("Zaporka uspješno kopirana u međuspremnik!");
}
(window as any).copyFunction = copyFunction;

const initEventListeners = () => {
  if (HOST) {
    HOST.innerText = command.hostname;
  }

  if (USER) {
    USER.innerText = command.username;
  }

  if (PRE_HOST) {
    PRE_HOST.innerText = command.hostname;
  }

  if (PRE_USER) {
    PRE_USER.innerText = command.username;
  }

  window.addEventListener('load', () => {
    writeLines(BANNER);
  });

  USERINPUT.addEventListener('keypress', userInputHandler);
  USERINPUT.addEventListener('keydown', userInputHandler);

  window.addEventListener('click', () => {
    USERINPUT.focus();
  });

}

initEventListeners();
