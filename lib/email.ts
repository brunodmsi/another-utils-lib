const MAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Validates a e-mail
 * @param {string} email E-mail string
 * @returns a boolean saying if email is valid or not
 */
export function validateEmail(email: string): boolean {
  if (typeof email !== 'string') return false;

  return MAIL_REGEX.test(email);
}
