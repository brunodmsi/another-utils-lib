import { calculateFirstChecker, calculateSecondChecker } from './Checker';
import { formatCPF } from './CPFFormatter';

import { formatOptions } from '../@types/CPF';


/**
 * Generates a random CPF
 * @param {string|null} formatOption nullable - sets the CPF formatting
 * @returns {string} Returns the random CPF with the set formatting option
 */
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
