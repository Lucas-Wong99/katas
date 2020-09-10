const order = function (num1, num2, num3) {
  const arr = [num1, num2, num3];
  const ordered = [];
  let num = 0;
  for (const item of arr) {
    if (item > num) {
      ordered.push(item);
    } else if (item < num) {
      ordered.unshift(item);
    } else {
      ordered.push(item);
    }
  }
  return `Here they are in order: ${ordered[0]} ${ordered[1]} ${ordered[2]}`;
};

console.log(order(5, 9, -3));
