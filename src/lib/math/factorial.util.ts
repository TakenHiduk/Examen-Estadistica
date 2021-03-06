export const factorial = (n: number) => {
  if (n < 0) return -1;

  if (n === 0) return 1;

  return n * factorial(n - 1);
};
