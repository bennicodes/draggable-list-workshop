// Iterate backwards from the end to the beginning
// Generate a random index
// Swap elements

const shuffleArray = (stepsArray) => {
  for (let i = stepsArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // [array[i], array[j]
    [stepsArray[i], stepsArray[randomIndex]] = [
      stepsArray[randomIndex],
      stepsArray[i],
    ];
  }
  return stepsArray;
};

export default shuffleArray;
