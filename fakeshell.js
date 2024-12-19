const promptMessage = "fakeShell";
let dir = '~'
const fileManager = [];

const print = function (args) {
  console.log(...args);
}

const changeDir = function (args) {
  dir = args
}

const createFile = function (args) {
  fileManager.push(...args);
}

const showFiles = function () {
  console.log(fileManager.join('  '));
}

const executeCommand = function (command, args) {
  switch (command) {
    case "echo": return print(args);
    case "cd": return changeDir(args);
    case 'touch': return createFile(args);
    case 'ls': return showFiles();
    case 'mkdir': return makedir()
  }
}

const runFakeShell = function () {
  while (true) {
    const inputCommand = prompt(promptMessage + ' ' + dir + ' %');
    const [command, ...args] = inputCommand.split(' ');

    executeCommand(command, args);
  }
}

runFakeShell();