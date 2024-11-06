const removeDuplicates = (numbers: number[]): number[] => {
  const newArray: number[] = [];

  numbers.forEach((number) => {
    if (!newArray.includes(number)) {
      newArray.push(number);
    }
  });
  return newArray;
};
