/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  return (n * n) >> 2; // sign >> meaning shift right
};

console.log(minOperations(3));
console.log(minOperations(6));

// mathematic solution
// in case n =3 ==> shift right 9 = 00000000101 .... 2 = 00000000010 .... shift = 0000000010
// in case n =6 ==> shift right 36 = 0000100100 .... 2 = 00000000010 .... shift = 0000001001
