"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = exports.holaMundo = exports.chaoMundo = void 0;
const moment = require("moment");
function chaoMundo() {
    return "Chao Mundo!";
}
exports.chaoMundo = chaoMundo;
function holaMundo() {
    return "Hola Mundo!";
}
exports.holaMundo = holaMundo;
function getTime() {
    return moment().format();
}
exports.getTime = getTime;
