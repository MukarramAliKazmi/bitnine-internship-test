function missingNumber(a) {
  let n = a.length + 1
  let ts = (n * (n + 1)) / 2
  let s = a.reduce((x, y) => x + y, 0)
  return ts - s === 46 ? -1 : ts - s
}

const array = [ 39, 17, 22, 35, 20, 42, 31, 9, 25, 1, 33, 41, 11, 30, 14, 2, 44, 15, 18, 29, 12, 7, 21, 6, 38, 36, 8, 26, 3, 37, 5, 16, 32, 23, 19, 10, 45, 4, 24, 40, 13, 28, 43, 34 ]

console.log(missingNumber(array))
