import validateCPF from '../../lib/br/CPF/CPFValidator';

const spy = jest.spyOn(console, 'warn');
const WARN_MESSAGE = 'Invalid value';

describe('Validate CPF', () => {
  describe('Number', () => {
    it('should return true to a valid CPF', () => {
      expect(validateCPF(27839367046)).toBeTruthy();
    });

    it('should return false when missing digits', () => {
      expect(validateCPF(27839366)).toBeFalsy();
    });

    it('should return false when has more than 11 digits', () => {
      expect(validateCPF(2783936714667)).toBeFalsy();
    });

    it('should return false to a invalid CPF', () => {
      expect(validateCPF(27839367146)).toBeFalsy();
    });
  });

  describe('String', () => {
    it('should return true to a valid CPF starting with 0', () => {
      expect(validateCPF('06325112733')).toBeTruthy()
    })

    it('should return true to a valid CPF just with digits', () => {
      expect(validateCPF('13768663663')).toBeTruthy()
    })

    it('should return true to a valid CPF with separator -', () => {
      expect(validateCPF('137686636-63')).toBeTruthy()
    })

    it('should return true to a valid CPF with separator - and .', () => {
      expect(validateCPF('137.686.636-63')).toBeTruthy()
    })

    it("should return false when isn't a valid CPF just with digits", () => {
      expect(validateCPF('06487598710')).toBeFalsy()
    })

    it("should return false when isn't a valid CPF with separator -", () => {
      expect(validateCPF('064875987-10')).toBeFalsy()
    })

    it("should return false when isn't a valid CPF with separator - and .", () => {
      expect(validateCPF('064.875.987-10')).toBeFalsy()
    })

    it('should return false when is mixing digits and letter', () => {
      expect(validateCPF('a064.875.987-10')).toBeFalsy()
    })

    it('should return false if special caracters', () => {
      expect(validateCPF('0&.*00.00a-00')).toBeFalsy()
    })

    it('should return false with 11 repeat digits', () => {
      expect(validateCPF('00000000000')).toBeFalsy()
    })

    it('1 = 0', () => {
      expect(validateCPF('76381842202')).toBeTruthy()
    })

    it('1 > 1', () => {
      expect(validateCPF('125.828.106-65')).toBeTruthy()
    })

    it('2 = 0', () => {
      expect(validateCPF('433.787.588-30')).toBeTruthy()
    })

    it('2 > 1', () => {
      expect(validateCPF('855.178.021-25')).toBeTruthy()
    })
  })
  describe('No values', () => {
    // it('should return undefined to true', () => {
    //   expect(validateCPF(true)).toBeFalsy()
    //   expect(spy).toHaveBeenCalledWith(WARN_MESSAGE)
    // })

    // it('should return undefined to false', () => {
    //   expect(validateCPF(false)).toBeFalsy()
    //   expect(spy).toHaveBeenCalledWith(WARN_MESSAGE)
    // })

    it('should return undefined to null', () => {
      expect(validateCPF(null)).toBeFalsy()
      expect(spy).toHaveBeenCalledWith(WARN_MESSAGE)
    })

    it('should return undefined to undefined', () => {
      expect(validateCPF(undefined)).toBeFalsy()
      expect(spy).toHaveBeenCalledWith(WARN_MESSAGE)
    })

    it('should return undefined to an empty string', () => {
      expect(validateCPF('')).toBeFalsy()
    })

    // it('should return undefined to no parameters', () => {
    //   expect(validateCPF()).toBeFalsy()
    //   expect(spy).toHaveBeenCalledWith(WARN_MESSAGE)
    // })

    it('should return undefined to NaN', () => {
      expect(validateCPF(NaN)).toBeFalsy()
    })
  })
});
