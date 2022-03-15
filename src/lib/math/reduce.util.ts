export const reduce = (
  numerator: number,
  denominator: number,
): { numerator: number; denominator: number } => {
  let gcd = (a: number, b: number) => (b ? gcd(b, a % b) : a);
  gcd = gcd(numerator, denominator);
  return {
    numerator: numerator / Number(gcd),
    denominator: denominator / Number(gcd),
  };
};
