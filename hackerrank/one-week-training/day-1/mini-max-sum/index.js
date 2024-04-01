#!/usr/bin/env node

"use strict";

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  let min = Number.MAX_VALUE,
    minIdx = -1,
    max = Number.MIN_VALUE,
    maxIdx = -1;

  arr.forEach((number, index) => {
    if (number < min) {
      min = number;
      minIdx = index;
    }
    if (number > max) {
      max = number;
      maxIdx = index;
    }
  });

  const minSum = arr.reduce(
    (acc, curr, idx) => (idx !== maxIdx ? acc + curr : acc + 0),
    0
  );

  const maxSum = arr.reduce(
    (acc, curr, idx) => (idx !== minIdx ? acc + curr : acc + 0),
    0
  );

  console.log(minSum, maxSum);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
