import { formatOptions } from '../@types/CPF';

export function formatCPF(
  value: string,
  formatter?: formatOptions
): string | void {
  let digitsSeparator;
  let checkersSeparator;

  if (formatter === 'digits') {
    digitsSeparator = '';
    checkersSeparator = '';
  } else if (formatter === 'checker') {
    digitsSeparator = '';
    checkersSeparator = '-';
  } else {
    digitsSeparator = '.';
    checkersSeparator = '-';
  }

  if (value.length > 11) {
    return console.error('The CPF has more than 11 digits.');
  }

  if (value.length < 11) {
    return console.error('The CPF has less than 11 digits.');
  }

  return (
    value.slice(0, 3) +
    digitsSeparator +
    value.slice(3, 6) +
    digitsSeparator +
    value.slice(6, 9) +
    checkersSeparator +
    value.slice(9, 11)
  );
}

/**
 * Format the CPF
 * @param {string} value CPF value
 * @param {string|null} formatOption nullable - sets the CPF formatting
 * @returns {string|void} Returns the formatted CPF, or a error
 */
function format(
  value: string | number,
  formatOption?: formatOptions
): string | void {
  if (!value) {
    console.error('The value has not been specified');
    return;
  }

  const cpf = String(value).replace(/[^\d]/g, '');

  return formatCPF(cpf, formatOption);
}

export default format;
