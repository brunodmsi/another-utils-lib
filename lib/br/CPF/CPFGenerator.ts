import { calculateFirstChecker, calculateSecondChecker } from './Checker';
import { formatCPF } from './CPFFormatter';

import { formatOptions } from '../@types/CPF';

function generate(formatOption?: formatOptions): string {
  let firstNineDigits = '';

  for (let i = 0; i < 9; i += 1) {
    firstNineDigits += String(Math.floor(Math.random() * 9));
  }

  const checker1 = calculateFirstChecker(firstNineDigits);
  const generatedCPF =
    firstNineDigits +
    checker1 +
    calculateSecondChecker(firstNineDigits + checker1);

  return formatCPF(generatedCPF, formatOption) as string;
}

export default generate;
