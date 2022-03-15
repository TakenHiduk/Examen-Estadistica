import { factorial } from '.';

export const choose = (a: number, b: number) =>
  factorial(a) / (factorial(b) * factorial(a - b));
