const sumArray = (numbers: number[]): number => {
  let sum: number = 0;

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    sum = number + sum;
  }

  return sum;
};
