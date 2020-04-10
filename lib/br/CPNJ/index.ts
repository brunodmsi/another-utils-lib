/**
 * Validates a CNPJ
 * @param {string} value CNPJ value
 * @returns {boolean} Returns whether the CNPJ is valid or not
 */
function validateCNPJ(value: string): boolean {
  if (typeof value !== 'string') return false;

  let cnpj = value.replace(/[^0-9]/g, '');

	// Validate size
	if (cnpj.length != 14)
		return false;

  // Checks if all digits are equal
	if (cnpj.match(/(\d)\1{13}/))
		return false;

  // Validates first verifier digit
  let sum = 0;
	for (let i = 0, j = 5; i < 12; i++) {
		sum += Number(cnpj.charAt(i)) * j;
		j = (j == 2) ? 9 : j - 1;
	}

	let rest = sum % 11;

	if (Number(cnpj.charAt(12)) != (rest < 2 ? 0 : 11 - rest))
		return false;

  // Validates second verifier
  sum = 0;
	for (let i = 0, j = 6; i < 13; i++)
	{
		sum += Number(cnpj.charAt(i)) * j;
		j = (j == 2) ? 9 : j - 1;
	}

	rest = sum % 11;

	return Number(cnpj.charAt(13)) == (rest < 2 ? 0 : 11 - rest);
}

export { validateCNPJ };
