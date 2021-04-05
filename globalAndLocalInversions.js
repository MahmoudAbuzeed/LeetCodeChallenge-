/**
 * @param {number[]} A
 * @return {boolean}
 */
var isIdealPermutation = function (A) {
  for (let i = 0; i < A.length; i++)
    if (i - A[i] > 1 || i - A[i] < -1) return false;
  return true;
};

console.log(isIdealPermutation([1, 0, 2]));
console.log(isIdealPermutation([1, 2, 0]));
