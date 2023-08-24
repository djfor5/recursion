function fibsI(n) {
  if (n === undefined) {
    throw new Error("Argument not provided. 'n' must be an integer 0 or greater.");
  } else if (typeof n !== "number") {
    throw new TypeError("Invalid argument. 'n' must be an integer 0 or greater.");
  } else if (n < 0) {
    throw new RangeError("Negative number. 'n' must be an integer 0 or greater.");
  } else if (!Number.isInteger(n)) {
    throw new RangeError("Non-integer. 'n' must be an integer 0 or greater.");
  }

  let arr = [];
  if (n === 0) {
    arr = [0];
    return arr;
  }
  if (n === 1) {
    arr = [0, 1];
    return arr;
  }
  arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}

function fibsR(n) {
  if (n === undefined) {
    throw new Error("Argument not provided. 'n' must be an integer 0 or greater.");
  } else if (typeof n !== "number") {
    throw new TypeError("Invalid argument. 'n' must be an integer 0 or greater.");
  } else if (n < 0) {
    throw new RangeError("Negative number. 'n' must be an integer 0 or greater.");
  } else if (!Number.isInteger(n)) {
    throw new RangeError("Non-integer. 'n' must be an integer 0 or greater.");
  }

  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  return fibsR(n - 1).concat(Number(fibsR(n - 1).slice(-2, -1)) + Number(fibsR(n - 1).slice(-1)));
}

const n = 8;

console.time();
console.log(fibsI(n));
console.timeEnd();

console.time();
console.log(fibsR(n));
console.timeEnd();

export {
  fibsI,
  fibsR,
};
