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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  let found = null;
  let curr = null;
  for (let i = 0; i < a.length; i++) {
    curr = a[i];
    found = true;
    for (let j = 0; j < a.length; j++) {
      if (curr === a[j] && i !== j) {
        found = false;
        break;
      }
    }
    if (found) return curr;
  }
}

function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const ws = fs.createWriteStream(path.join(__dirname, "output"));

  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const result = lonelyinteger(a);

  ws.write(result + "\n");

  ws.end();
}
