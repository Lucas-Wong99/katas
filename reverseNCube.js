const helper = function (num) {
  const absoluteNum = Math.abs(num);
  const numSquareRoot = Math.sqrt(absoluteNum);
  const numCubedTimesFive = Math.pow(absoluteNum, 3) * 5;
  return numSquareRoot + numCubedTimesFive;
};

const reverseFloatingPointArr = function (num1, num2, num3, num4, num5) {
  const arrayOfNums = [num1, num2, num3, num4, num5];
  let newArray = [];
  for (const item of arrayOfNums) {
    const newNum = helper(item);
    newArray.unshift(newNum);
  }
  return `Results in reverse order: ${newArray[0]} ${newArray[1]} ${newArray[2]} ${newArray[3]} ${newArray[4]}`;
};

console.log(reverseFloatingPointArr(1.2, -2, 10, 0, 2.41));
