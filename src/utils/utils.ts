import moment = require("moment");

export function chaoMundo() {
  return "Chao Mundo!";
}

export function holaMundo() {
  return "Hola Mundo!";
}

export function getTime(){
  return moment().format();
}