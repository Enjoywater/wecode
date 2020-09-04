const test = () => {
  const numList = [];

  for (let i = 1; i < 51; i++) {
    if (i % 2 === 0) {
      numList.push(i);
    }
  }
  return numList;
};
