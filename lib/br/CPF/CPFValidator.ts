import { calculateFirstChecker, calculateSecondChecker } from './Checker';

/**
 * validate if CPF is valid or not
 * @param {string|number} value CPF value
 * @return {boolean} if it's valid, returns true, otherwise, returns false
 */
function validate(value: number | string): boolean {
  if (typeof value !== 'string' && typeof value !== 'number') {
    console.warn('Invalid value');
    return false;
  }

  const cleanCPF = String(value).replace(/\.|-|\s/g, '');

  if (cleanCPF.length !== 11) {
    return false;
  }

  const firstNineDigits = cleanCPF.substring(0, 9);
  const checker = cleanCPF.substring(9, 11);

  for (let i = 0; i < 10; i += 1) {
    if (`${firstNineDigits}${checker}` === Array(12).join(String(i))) {
      return false;
    }
  }

  const firstChecker = calculateFirstChecker(firstNineDigits);
  const secondChecker = calculateSecondChecker(
    `${firstNineDigits}${firstChecker}`
  );

  return (
    checker.toString() === firstChecker.toString() + secondChecker.toString()
  );
}

export default validate;
