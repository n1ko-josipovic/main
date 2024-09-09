import command from '../config.json' assert {type: 'json'};
import { ABOUTME } from "./commands/aboutme";
import { ARCHIVE } from "./commands/archive";
import { BANNER } from "./commands/banner";
import { DEFAULT } from "./commands/default";
import { ECHO } from "./commands/echo";
import { HELP } from "./commands/help";
import { INFO } from "./commands/info";
import { PROJECTS } from "./commands/projects";
import { TIME } from "./commands/time";

import { UIP } from "./content/uip";
import { UUBP } from "./content/uubp";
import { UURM } from "./content/uurm";

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
const COMMANDS = ["aboutme", "archive", "banner", "echo", "help", "history", "info", "projects", "repo", "time", "clear"];
const HISTORY: string[] = [];

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
      const message = userInput.trimStart().slice(4).trim();
      writeLines([message, "<br>"]);
      USERINPUT.value = resetInput;
      userInput = resetInput;
      return
    } else {
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
      ARCHIVE.forEach((line: string, idx: number) => {
        setTimeout(() => {
          if (!mutWriteLines) return;

          const paragraph = document.createElement("p");
          paragraph.innerHTML = line;
          paragraph.style.marginBottom = '5px';

          mutWriteLines.parentNode!.insertBefore(paragraph, mutWriteLines);
          scrollToBottom();
        }, 40 * idx);
      });
      break;


    case 'archive\\i. razred\\uip':
      writeLines(UIP);
      break;
    case 'archive\\ii. razred\\uubp':
      writeLines(UUBP);
      break;
    case 'archive\\ii. razred\\uurm':
      writeLines(UURM);
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
      writeLines(ECHO);
      break;

    case 'help':
      writeLines(HELP);
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
          p.innerHTML = "&nbsp;→&nbsp;" + item;
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
      writeLines(INFO);
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

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  const timeElement = document.getElementById('bar-1');
  if (timeElement) {
    timeElement.textContent = timeString;
  }
}

updateTime();
setInterval(updateTime, 1000);