const palindrome = function (string) {
  const original = string.replace(/\s/g, "").toLowerCase();
  const splitString = original.split("");
  const reversedArr = [];
  for (const element of splitString) {
    reversedArr.unshift(element);
  }
  console.log(reversedArr);
  if (original === reversedArr.join("")) {
    return `${string} is a palindrome`;
  } else {
    return `${string} is not a palindrome`;
  }
};
