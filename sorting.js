const isEven = function (num) {
  return (num & 1) === 0;
}

const isOdd = function (num) {
  return (num & 1) === 1;
}

const sortEvensAndOdds = function (array) {
  return array.sort(function (a, b) {
    if (isEven(a) && isEven(b)) {
      return a - b;
    }

    if (isOdd(a) && isOdd(b)) {
      return a - b;
    }

    return isEven(a) ? 1 : -1;
  });
}

console.log(sortEvensAndOdds([1, 7, 4, 3, 2]));

