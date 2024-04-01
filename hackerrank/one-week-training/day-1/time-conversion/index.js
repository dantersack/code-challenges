#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const time = s.slice(0, 8);
  const format = s.slice(8);
  const timeArr = time.split(":");

  // "AM" scenario
  if (format === "AM") {
    if (timeArr[0] === "12") {
      timeArr[0] = "00";
      return timeArr.join(":");
    }
    return time;
  }

  // "PM" scenario
  if (timeArr[0] === "12") {
    return timeArr.join(":");
  }

  let hours = parseInt(timeArr[0], 10) + 12;

  if (hours === 24) timeArr[0] = "00";
  else timeArr[0] = String(hours);

  return timeArr.join(":");
}

function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const ws = fs.createWriteStream(path.join(__dirname, "output"));

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
