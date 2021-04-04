/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const arr = [];
  for (let i = 0; i < strs.length; i++) {
    let count0 = 0,
      count1 = 0;

    for (let j = 0; j < strs[i].length; j++) {
      strs[i][j] == 0 ? (count0 += 1) : (count1 += 1);
    }
    // console.log(strs[i]);
    console.log(count0, count1);
    // console.log(count1);

    if (
      count0 <= m &&
      count1 <= n &&
      strs[i] != m &&
      strs[i] !== n &&
      (strs[i].length <= m || strs[i].length <= n)
    ) {
      arr.push(strs[i]);
    }
  }
  // return arr.length;
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));
console.log(findMaxForm(["10", "0", "1"], 1, 1));
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 4, 3));
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 4, 2));
