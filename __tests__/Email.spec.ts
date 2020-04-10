import { validateEmail } from '../lib/email';

describe('E-mail', () => {
  it('should return true with valid email', () => {
    expect(validateEmail('examplemail@gmail.com')).toBeTruthy();
  });

  it('should return false with email without @', () => {
    expect(validateEmail('brunodemasi1gmail.com')).toBeFalsy();
  });

  it('should return false with email domain', () => {
    expect(validateEmail('brunodemasi1@')).toBeFalsy();
  });
})
