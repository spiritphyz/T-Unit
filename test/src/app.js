var reverseString = function(str) {
  // to access the array 'reverse' function,
  // split the string into an array of single characters,
  // reverse the array,
  // join the array characters into a phrase again
  // return str.split('').reverse().join('');
};

var factorialize = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorialize(num - 1);
};