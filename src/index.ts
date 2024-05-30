import worldCountries from "world-countries";

/**
 * Converts country codes from **ISO 3166-1 alpha-2** format to other formats.
 */
export class Alpha2 {
	/**
	 * Converts an alpha-2 country code to alpha-3 format.
	 * @param alpha2 The alpha-2 country code.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The alpha-3 country code.
	 */
	public static toAlpha3(alpha2: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("cca2", "cca3", alpha2, ignoreError);
	}

	/**
	 * Converts an alpha-2 country code to numeric format.
	 * @param alpha2 The alpha-2 country code.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The numeric country code.
	 */
	public static toNumeric(alpha2: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("cca2", "ccn3", alpha2, ignoreError);
	}

	/**
	 * Converts an alpha-2 country code to top-level domain (TLD) format.
	 * @param alpha2 The alpha-2 country code.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The TLD associated with the country.
	 */
	public static toTLD(alpha2: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("cca2", "tld", alpha2, ignoreError);
	}

	/**
	 * Converts an alpha-2 country code to CIOC (Comité International Olympique) format.
	 * @param alpha2 The alpha-2 country code.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The CIOC code associated with the country.
	 */
	public static toCIOC(alpha2: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("cca2", "cioc", alpha2, ignoreError);
	}
}

/**
 * Converts country codes from **ISO 3166-1 alpha-3** format to other formats.
 */
export class Alpha3 {
	/**
	 * Converts an alpha-3 country code to alpha-2 format.
	 * @param alpha3 The alpha-3 country code.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The alpha-2 country code.
	 */
	public static toAlpha2(alpha3: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("cca3", "cca2", alpha3, ignoreError);
	}

	/**
	 * Converts an alpha-3 country code to numeric format.
	 * @param alpha3 The alpha-3 country code.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The numeric country code.
	 */
	public static toNumeric(alpha3: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("cca3", "ccn3", alpha3, ignoreError);
	}

	/**
	 * Converts an alpha-3 country code to top-level domain (TLD) format.
	 * @param alpha3 The alpha-3 country code.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The TLD associated with the country.
	 */
	public static toTLD(alpha3: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("cca3", "tld", alpha3, ignoreError);
	}

	/**
	 * Converts an alpha-3 country code to CIOC (Comité International Olympique) format.
	 * @param alpha3 The alpha-3 country code.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The CIOC code associated with the country.
	 */
	public static toCIOC(alpha3: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("cca3", "cioc", alpha3, ignoreError);
	}
}

/**
 * Converts country codes from **ISO 3166-1 numeric** format to other formats.
 */
export class Numeric {
	/**
	 * Converts a numeric country code to its corresponding alpha-2 code.
	 * @param numeric - The numeric country code.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The alpha-2 country code.
	 */
	public static toAlpha2(numeric: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("ccn3", "cca2", numeric, ignoreError);
	}

	/**
	 * Converts a numeric country code to its corresponding alpha-3 code.
	 * @param numeric - The numeric country code.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The alpha-3 country code.
	 */
	public static toAlpha3(numeric: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("ccn3", "cca3", numeric, ignoreError);
	}

	/**
	 * Converts a numeric country code to its corresponding top-level domain (TLD).
	 * @param numeric - The numeric country code.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The top-level domain (TLD).
	 */
	public static toTLD(numeric: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("ccn3", "tld", numeric, ignoreError);
	}

	/**
	 * Converts a numeric country code to its corresponding CIOC code.
	 * @param numeric - The numeric country code.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The CIOC code.
	 */
	public static toCIOC(numeric: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("ccn3", "cioc", numeric, ignoreError);
	}
}

/**
 * A class that provides methods to convert top-level domains (TLDs) to different country codes.
 */
export class TopLevelDomain {
	/**
	 * Converts a top-level domain (TLD) to its corresponding ISO 3166-1 alpha-2 country code.
	 * @param tld The top-level domain to convert.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The ISO 3166-1 alpha-2 country code.
	 */
	public static toAlpha2(tld: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("tld", "cca2", tld, ignoreError);
	}

	/**
	 * Converts a top-level domain (TLD) to its corresponding ISO 3166-1 alpha-3 country code.
	 * @param tld The top-level domain to convert.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The ISO 3166-1 alpha-3 country code.
	 */
	public static toAlpha3(tld: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("tld", "cca3", tld, ignoreError);
	}

	/**
	 * Converts a top-level domain (TLD) to its corresponding ISO 3166-1 numeric country code.
	 * @param tld The top-level domain to convert.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The ISO 3166-1 numeric country code.
	 */
	public static toNumeric(tld: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("tld", "ccn3", tld, ignoreError);
	}

	/**
	 * Converts a top-level domain (TLD) to its corresponding IOC country code.
	 * @param tld The top-level domain to convert.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The IOC country code.
	 */
	public static toCIOC(tld: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("tld", "cioc", tld, ignoreError);
	}
}

/**
 * The CIOC class provides methods to convert **International Olympic Committee** codes to different country codes.
 */
export class CIOC {
	/**
	 * Converts a CIOC code to the corresponding Alpha-2 country code.
	 * @param cioc - The CIOC code to convert.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The corresponding Alpha-2 country code.
	 */
	public static toAlpha2(cioc: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("cioc", "cca2", cioc, ignoreError);
	}

	/**
	 * Converts a CIOC code to the corresponding Alpha-3 country code.
	 * @param cioc - The CIOC code to convert.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The corresponding Alpha-3 country code.
	 */
	public static toAlpha3(cioc: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("cioc", "cca3", cioc, ignoreError);
	}

	/**
	 * Converts a CIOC code to the corresponding Numeric country code.
	 * @param cioc - The CIOC code to convert.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The corresponding Numeric country code.
	 */
	public static toNumeric(cioc: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("cioc", "ccn3", cioc, ignoreError);
	}

	/**
	 * Converts a CIOC code to the corresponding Top-Level Domain (TLD).
	 * @param cioc - The CIOC code to convert.
	 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
	 * @returns The corresponding Top-Level Domain (TLD).
	 */
	public static toTLD(cioc: string, ignoreError?: boolean): string {
		return convertByWorldCountryLookup("cioc", "tld", cioc, ignoreError);
	}
}

/**
 * Converts a value from one country property to another using a world country lookup.
 *
 * @param fromKey - The property key to convert from.
 * @param toKey - The property key to convert to.
 * @param value - The value to convert.
 * @param ignoreError - Optional. If true, returns the original value if the country is not found. Defaults to false.
 * @returns The converted value.
 * @throws Error if the country is not found and ignoreError is not set to true.
 */
function convertByWorldCountryLookup(
	fromKey: string,
	toKey: string,
	value: string,
	ignoreError = false,
): string {
	// @ts-ignore
	const country = worldCountries.find((country) => country[fromKey] === value);
	if (country) {
		// @ts-ignore
		return country[toKey] as string;
	}
	if (ignoreError) {
		return value;
	}
	throw new Error(`Country not found for ${fromKey} ${value}`);
}
