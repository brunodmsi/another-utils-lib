export const calculateFirstChecker = (firstNineDigits: string): number => {
  let sum: number | null = 0;

  for (let j = 0; j < 9; j += 1) {
    sum += Number(firstNineDigits.charAt(j)) * (10 - j);
  }

  const lastSumFirstChecker = sum % 11;
  const firstChecker = lastSumFirstChecker < 2 ? 0 : 11 - lastSumFirstChecker;

  return firstChecker;
};

export const calculateSecondChecker = (cpfWithFirstChecker: string): number => {
  let sum: null | number = 0;

  for (let k = 0; k < 10; k += 1) {
    sum += Number(cpfWithFirstChecker.toString().charAt(k)) * (11 - k);
  }

  const lastSumSecondChecker = sum % 11;
  const secondChecker =
    lastSumSecondChecker < 2 ? 0 : 11 - lastSumSecondChecker;

  return secondChecker;
};
