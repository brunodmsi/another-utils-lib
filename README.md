# Another Utils Library
This package was born with the plan of solving only one mans problem (the author), but it can, of course be of your interest.

Feel free to use, star, fork, make pull requests, appoint issues, and all that sort of stuff.

## Installation
With `npm`:
`npm install another-utils-lib --save`
Or if you're using `yarn`:
`yarn add another-utils-lib`
in the following you'll see the library documentation.

## Documentation
API References for the package.

### BR (Brazilian Utils)
```javascript
const utils = require('another-utils-lib/br');
```
#### CPF

##### Generate CPF
```javascript
const { CPF } = require('another-utils-lib/br');

CPF.generate([formatOption]);
```
Check [format options](#format-options).

##### Validate CPF
```javascript
const { CPF } = require('another-utils-lib/br');

CPF.validate('123.456.789-01');
```
**Note:** characters like `.`, `-`, and `space` are allowed.

##### Format CPF
```javascript
const { CPF } = require('another-utils-lib/br');

CPF.format('123.456.789-01', [formatOption]);
```
Check [format options](#format-options).

##### Format options

- **Default**
```javascript
const { CPF } = require('another-utils-lib/br');

CPF.format('123.456.789-01');
```
Returns a CPF with the format XXX.XXX.XXX-XX

- **Digits**
```javascript
const { CPF } = require('another-utils-lib/br');

CPF.format('123.456.789-01', 'digits');
```
Returns a CPF with the format XXXXXXXXXXX

- **Checker**
```javascript
const { CPF } = require('another-utils-lib/br');

CPF.format('123.456.789-01', 'checker');
```
Returns a CPF with the format XXXXXXXXX-XX

#### CNPJ

##### Validate CNPJ
```javascript
const { CNPJ } = require('another-utils-lib/br');

CNPJ.validate('23.655.393/0001-77');
```
**Note**: characters like `.`, `-` and `space` are allowed.

### E-mail

#### Validate e-mail
```javascript
const { validateEmail } = require('another-utils-lib');

validateEmail('examplemail@gmail.com');
```

## Contribution guidelines
- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -m 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a `pull request`

## License
This package in under the [MIT License](https://github.com/brunodmsi/another-utils-lib/blob/master/LICENSE.md).

---

<p align="center">Made with ❤️ by <strong><a href="https://github.com/brunodmsi">Bruno De Masi</a></strong></p>
