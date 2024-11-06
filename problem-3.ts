const countWordOccurrences = (sentence: string, word: string): number => {
  let numberOfItems: number = 0;

  const sentenceInLowercase: string[] = sentence
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(" ");

  for (let index = 0; index < sentenceInLowercase.length; index++) {
    const sentenceWord: string = sentenceInLowercase[index];

    if (sentenceWord === word.toLocaleLowerCase()) {
      numberOfItems = numberOfItems + 1;
    }
  }

  return numberOfItems;
};
