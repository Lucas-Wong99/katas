const minMax = function (num) {
  let listOfNums = [];
  for (let i = 0; i < num; i++) {
    listOfNums.push(Math.floor(Math.random() * 100));
  }
  const maxNum = Math.max(...listOfNums);
  const minNum = Math.min(...listOfNums);
  return `The largest number was ${maxNum} and the smallest number was ${minNum}`;
};

console.log(minMax(12.4));
