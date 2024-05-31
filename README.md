# Convert ISO 3166-1 Codes

A Node.js module for converting between different country code formats using the ISO 3166-1 standard, leveraging the `world-countries` package.

## Features

- Convert between ISO 3166-1 alpha-2, alpha-3, numeric, TopLevelDomain, and CIOC formats.
- Easily integrate into any Node.js project.
- Uses npm package `world-countries` for accurate and up-to-date country data.

## Installation

Install the package using npm:

```bash
npm install convert-iso-codes
```

## Usage

Here's how you can use the Country Code Converter in your project:

### Convert Alpha-2 Country Codes

```javascript
import { Alpha2 } from 'convert-iso-codes';

// Convert from Alpha-2 to Alpha-3
const alpha3 = Alpha2.toAlpha3('US'); // Returns 'USA'

// Convert from Alpha-2 to Numeric
const numeric = Alpha2.toNumeric('US'); // Returns '840'

// Convert from Alpha-2 to TLD
const tld = Alpha2.toTLD('US'); // Returns '.us'

// Convert from Alpha-2 to CIOC
const cioc = Alpha2.toCIOC('US'); // Returns 'USA'
```

### Convert Alpha-3 Country Codes

```javascript
import { Alpha3 } from 'convert-iso-codes';

// Convert from Alpha-3 to Alpha-2
const alpha2 = Alpha3.toAlpha2('GBR'); // Returns 'GB'

// ...
```

### Convert Numeric Country Codes

```javascript
import { Numeric } from 'convert-iso-codes';

// Convert from Numeric to Alpha-2
const alpha2 = Numeric.toAlpha2('356'); // Returns 'IN'

// ...
```

### Convert Top-Level Domains

```javascript
import { TopLevelDomain } from 'convert-iso-codes';

// Convert TLD to Alpha-2
const alpha2 = TopLevelDomain.toAlpha2('.au'); // Returns 'AU'

// ...
```

### Convert CIOC Codes

```javascript
import { CIOC } from 'convert-iso-codes';

// Convert CIOC to Alpha-2
const alpha2 = CIOC.toAlpha2('AUS'); // Returns 'AU'

// ...
```

## Error Handling
Usually the converter functions will throw an error if an invalid country code is provided.

If you don't want this behaviour, you can pass `false` as the second argument (`ignoreError`) to the converter functions.
This will make the functions return the original value if the country code is invalid.

```javascript
const alpha2 = Alpha3.toAlpha2('XYZ', false); // Returns 'XYZ'
```

## Contributing

Contributions are always welcome! Please open an issue or a pull request.

## License

Licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Support

For support, please open an issue on this repository.
