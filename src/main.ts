import command from '../config.json' assert {type: 'json'};
import { ABOUTME } from "./commands/aboutme";
import { BANNER } from "./commands/banner";
import { DEFAULT } from "./commands/default";
import { HELP } from "./commands/help";
import { HELP_ } from "./commands/help+";
import { downloadINFO } from "./commands/info";
import { PROJECTS } from "./commands/projects";
import { TIME } from "./commands/time";

import { UIP } from "./repo/uip";
import { POR } from "./repo/por";
import { UUBP } from "./repo/uubp";
import { UURM } from "./repo/uurm";
import { RM } from "./repo/rm";
import { SJWP } from "./repo/sjwp";


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
const COMMANDS = ["aboutme", "banner", "echo", "github", "help", "history", "info", "password", "projects", "repo", "time", "translate", "weather", "clear"];
const HISTORY: string[] = [];

const SHADOW = "text-shadow-style";
const ARROW_COLOR = "color-[#70FDFF]";

const REPO_LINK = command.repoLink;

const scrollToBottom = () => {
  const MAIN = document.getElementById("main");
  if (!MAIN) return

  MAIN.scrollTop = MAIN.scrollHeight;
}

let userInputKeyOption = 0;
function userInputHandler(e: KeyboardEvent) {
  const key = e.key;

  switch (key) {
    case "Enter":
      switch (userInputKeyOption) {
        case 0:
          e.preventDefault();
          enterKey();
          scrollToBottom();
          break;
        case 1:
          e.preventDefault();
          repoKeys(key);
          break;
      }
      break;
    case "Escape":
      switch (userInputKeyOption) {
        case 0:
          USERINPUT.value = "";
          break;
        case 1:
          e.preventDefault();
          closeRepo();
          break;
      }

      break;
    case "ArrowUp":
      switch (userInputKeyOption) {
        case 0:
          arrowKeys(key);
          e.preventDefault()
          break;
        case 1:
          repoKeys(key);
          e.preventDefault();
          break;
      }
      break;

    case "ArrowDown":
      switch (userInputKeyOption) {
        case 0:
          arrowKeys(key);
          break;
        case 1:
          repoKeys(key);
          e.preventDefault();
          break;
      }
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
    const trimmedThanUserInput = userInput.trimStart().toLowerCase();
    const userInputThanTrimmed = userInput.toLowerCase().trim();

    if (trimmedThanUserInput.startsWith("echo ") && userInputThanTrimmed !== "echo") { writeLines([userInput.trimStart().slice(5), "<br>"]); }
    else if (trimmedThanUserInput.startsWith("weather ") && userInputThanTrimmed !== "weather") { const weatherCity = userInput.trimStart().slice(8); fetch(`https://wttr.in/${weatherCity}?ATm`).then(response => response.ok ? response.text() : Promise.reject()).then(weatherData => { const weatherLines = weatherData.split('\n').slice(0, window.innerWidth < 1800 ? 7 : -3); if (weatherLines.length > 0) weatherLines[weatherLines.length - 2] += '\n'; writeLines(["<br>", `<pre>${weatherLines.map(line => `&nbsp;${line}`).join('\n')}</pre>`, "<br>"]); }).catch(() => writeLines([`Greška u prikupljanju prognoze za grad: <span class='lowlighted'>${weatherCity}</span>`, "<br>"])); }
    else if (trimmedThanUserInput.startsWith("translate ") && userInputThanTrimmed !== "translate") { const translateText = userInput.trimStart().slice(10); fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=hr&tl=en&dt=t&q=${encodeURI(translateText)}`).then(response => { if (!response.ok) { throw new Error('Network response was not ok'); } return response.json(); }).then(json => { const translationText = json[0]?.map((item: any[]) => item[0]).join("") || "Translation not found."; console.log('Translation:', translationText); alert(translationText); }).catch((error) => { const errorMessage = `Translation error: ${error.message}`; console.error(errorMessage); alert(errorMessage); }); }
    else { commandHandler(userInputThanTrimmed); }

    USERINPUT.value = resetInput;
    userInput = resetInput;
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

    case 'repo':
      writeLines(["Otvaranje repozitorija...", "<br>"]);
      setTimeout(() => {
        const fileContainer = document.getElementById('repo-container');
        if (fileContainer) {
          fileContainer.classList.add('show');
          userInputKeyOption = 1;
        }
      }, 500);
      break;

    case '/repozitorij/1. razred/uip.sh':
      writeLines(UIP);
      break;

    case '/repozitorij/2. razred/por.sh':
      writeLines(POR);
      break;

    case '/repozitorij/2. razred/uubp.sh':
      writeLines(UUBP);
      break;

    case '/repozitorij/2. razred/uurm.sh':
      writeLines(UURM);
      break;

    case '/repozitorij/3. razred/rm.sh':
      writeLines(RM);
      break;

    case '/repozitorij/3. razred/sjwp.sh':
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
      writeLines(["Korištenje: echo [poruka]. Primjer: echo Pozdrav!", "<br>"]);
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
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@%&*()_[]{}|;:,.?";
      const password = Array.from({ length: 12 }, () => charset[Math.floor(Math.random() * charset.length)]).join('');

      writeLines([`Zaporka: <span class='lowlighted' onclick='copyFunction()' id='copyText' style='cursor: pointer;'>${password}</span>`, "<br>"]);
      break;

    case 'projects':
      writeLines(PROJECTS);
      break;

    case 'github':
      writeLines(["Preusmjeravanje na github.com...", "<br>"]);
      setTimeout(() => {
        window.open(REPO_LINK, '_blank');
      }, 500);
      break;

    case 'time':
      writeLines(TIME);
      break;

    case 'translate':
      writeLines(["Usage: translate [tekst]. Example: translate Pozdrav!", "<br>"]);
      break;

    case 'weather':
      writeLines(["Korištenje: weather [grad]. Primjer: weather Zagreb", "<br>"]);
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
    scrollToBottom();
  });

}

initEventListeners();



// Repozitorij
const today = new Date().toISOString().split('T')[0];
const fileSystem: { [key: string]: any } = {
  "": {
    "repozitorij": {
      "type": "folder",
      "typeName": "SUB-DIR",
      "lastModified": "2024-10-7",
      "1. razred": {
        "type": "folder",
        "typeName": "SUB-DIR",
        "lastModified": "2024-10-7",
        "UIP.sh": { "type": "executable", "typeName": "SHELL SCRIPT", "lastModified": "2024-10-7" }
      },
      "2. razred": {
        "type": "folder",
        "typeName": "SUB-DIR",
        "lastModified": "2024-10-7",
        "UUBP.sh": { "type": "executable", "typeName": "SHELL SCRIPT", "lastModified": "2024-10-7", },
        "UURM.sh": { "type": "executable", "typeName": "SHELL SCRIPT", "lastModified": "2024-10-7" }
      },
      "3. razred": {
        "type": "folder",
        "typeName": "SUB-DIR",
        "lastModified": "2024-10-7",
        "RM.sh": { "type": "executable", "typeName": "SHELL SCRIPT", "lastModified": today },
        "SJWP.sh": { "type": "executable", "typeName": "SHELL SCRIPT", "lastModified": today }
      }
    }
  }
};

let currentDirectory: any = fileSystem[""]["repozitorij"];
let directoryStack: string[] = ["", "repozitorij"];
let currentIndex: number = 0;
let activeFile: string = '';

function repoKeys(e: string): void {
  const items: NodeListOf<Element> = document.querySelectorAll('.file, .directory');
  switch (e) {
    case "ArrowDown":
      if (currentIndex < items.length - 1) {
        currentIndex++;
        repoHighlightItem(currentIndex);
      }
      break;
    case "ArrowUp":
      if (currentIndex > 0) {
        currentIndex--;
        repoHighlightItem(currentIndex);
      }
      break;
    case "Enter":
      (items[currentIndex] as HTMLElement).click();
      break;
  }
}

let isFileClicked = false;
function renderDirectory(directory: any): void {
  const container: HTMLElement | null = document.querySelector('.repo-elements');

  if (container) {
    container.innerHTML = '';

    if (directoryStack.length > 1) {
      const backOption: HTMLElement = document.createElement('div');
      backOption.className = 'directory';
      backOption.innerHTML = `
        <span class="repo-column-icon"><i class="icon fa-regular fa-folder-open"></i></span>
        <span class="repo-column-name">..</span>
        <span class="repo-column-type">UP-DIR</span>
        <span class="repo-column-date">2024-10-7</span>
        <span class="repo-column-who">root</span>
      `;
      backOption.onclick = goBackRepoFolder;
      container.appendChild(backOption);
    }

    for (let item in directory) {
      if (item !== 'type' && item !== 'typeName' && item !== 'lastModified') {
        const entry: HTMLElement = document.createElement('div');

        const isFolder: boolean = directory[item].type === 'folder';
        entry.className = isFolder ? 'directory' : 'file';

        const typeName: string = directory[item].typeName;
        const lastModified: string = directory[item].lastModified || 'Nepoznato';
        if (isFolder) {
          entry.innerHTML = `
          <span class="repo-column-icon"> <i class="icon fa-regular fa-folder"></i></span>
          <span class="repo-column-name">${item}</span>
          <span class="repo-column-type">${typeName}</span>
          <span class="repo-column-date">${lastModified}</span>
          <span class="repo-column-who">root</span>`;
        }
        else {
          entry.innerHTML = `
          <span class="repo-column-icon"><i class="icon fa-brands fa-linux"></i></span>
          <span class="repo-column-name">${item}</span>
          <span class="repo-column-type">${typeName}</span>
          <span class="repo-column-date">${lastModified}</span>
          <span class="repo-column-who">strippy</span>`;
        }

        if (isFolder) {
          entry.onclick = () => openRepoFolder(item);
        } else {
          entry.onclick = () => {
            if (!isFileClicked) {
              isFileClicked = true;
              setTimeout(() => {
                const fullPath = directoryStack.length > 0 ? directoryStack.join('/') + `/${item}` : '';
                USERINPUT.value = fullPath;
                enterKey();
                scrollToBottom();
                closeRepo();
                isFileClicked = false;
              }, 300);
            }
          };
        }
        container.appendChild(entry);
      }
    }

    currentIndex = 0;
    repoHighlightItem(currentIndex);
  }
}

function openRepoFolder(folderName: string): void {
  currentDirectory = currentDirectory[folderName];
  directoryStack.push(folderName);
  renderDirectory(currentDirectory);
  updateCurrentRepoDirectoryPath();
}

function goBackRepoFolder(): void {
  directoryStack.pop();
  currentDirectory = fileSystem;
  directoryStack.forEach(dir => {
    currentDirectory = currentDirectory[dir];
  });
  renderDirectory(currentDirectory);
  updateCurrentRepoDirectoryPath();
}

function repoHighlightItem(index: number): void {
  const items: NodeListOf<Element> = document.querySelectorAll('.file, .directory');
  items.forEach(item => item.classList.remove('repo-active'));
  items[index].classList.add('repo-active');
  activeFile = (items[index].querySelector('.repo-column-name') as HTMLElement)?.textContent || '';
  updateCurrentRepoDirectoryPath();
}

function updateCurrentRepoDirectoryPath(): void {
  const pathElement: HTMLElement | null = document.getElementById('current-repo-directory-path');
  if (pathElement) {
    const path = directoryStack.length > 0
      ? directoryStack.join('/') + '/'
      : '';
    pathElement.textContent = `${path}${activeFile}`;
  }
}

function closeRepo(): any {
  const fileContainer = document.getElementById('repo-container');
  if (fileContainer) {
    fileContainer.classList.remove('show');
  }
  userInputKeyOption = 0;
  return;
}
(window as any).closeRepo = closeRepo;

renderDirectory(currentDirectory);
updateCurrentRepoDirectoryPath();