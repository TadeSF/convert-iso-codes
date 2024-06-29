/**
 * Converts country codes from **ISO 3166-1 alpha-2** format to other formats.
 */
export declare class Alpha2 {
    /**
     * Converts an alpha-2 country code to alpha-3 format.
     * @param alpha2 The alpha-2 country code.
     * @returns The alpha-3 country code.
     */
    static toAlpha3(alpha2: string): string;
    /**
     * Converts an alpha-2 country code to numeric format.
     * @param alpha2 The alpha-2 country code.
     * @returns The numeric country code.
     */
    static toNumeric(alpha2: string): string;
    /**
     * Converts an alpha-2 country code to top-level domain (TLD) format.
     * @param alpha2 The alpha-2 country code.
     * @returns The TLD associated with the country.
     */
    static toTLD(alpha2: string): string;
    /**
     * Converts an alpha-2 country code to CIOC (Comité International Olympique) format.
     * @param alpha2 The alpha-2 country code.
     * @returns The CIOC code associated with the country.
     */
    static toCIOC(alpha2: string): string;
}
/**
 * Converts country codes from **ISO 3166-1 alpha-3** format to other formats.
 */
export declare class Alpha3 {
    /**
     * Converts an alpha-3 country code to alpha-2 format.
     * @param alpha3 The alpha-3 country code.
     * @returns The alpha-2 country code.
     */
    static toAlpha2(alpha3: string): string;
    /**
     * Converts an alpha-3 country code to numeric format.
     * @param alpha3 The alpha-3 country code.
     * @returns The numeric country code.
     */
    static toNumeric(alpha3: string): string;
    /**
     * Converts an alpha-3 country code to top-level domain (TLD) format.
     * @param alpha3 The alpha-3 country code.
     * @returns The TLD associated with the country.
     */
    static toTLD(alpha3: string): string;
    /**
     * Converts an alpha-3 country code to CIOC (Comité International Olympique) format.
     * @param alpha3 The alpha-3 country code.
     * @returns The CIOC code associated with the country.
     */
    static toCIOC(alpha3: string): string;
}
/**
 * Converts country codes from **ISO 3166-1 numeric** format to other formats.
 */
export declare class Numeric {
    /**
     * Converts a numeric country code to its corresponding alpha-2 code.
     * @param numeric - The numeric country code.
     * @returns The alpha-2 country code.
     */
    static toAlpha2(numeric: string): string;
    /**
     * Converts a numeric country code to its corresponding alpha-3 code.
     * @param numeric - The numeric country code.
     * @returns The alpha-3 country code.
     */
    static toAlpha3(numeric: string): string;
    /**
     * Converts a numeric country code to its corresponding top-level domain (TLD).
     * @param numeric - The numeric country code.
     * @returns The top-level domain (TLD).
     */
    static toTLD(numeric: string): string;
    /**
     * Converts a numeric country code to its corresponding CIOC code.
     * @param numeric - The numeric country code.
     * @returns The CIOC code.
     */
    static toCIOC(numeric: string): string;
}
/**
 * A class that provides methods to convert top-level domains (TLDs) to different country codes.
 */
export declare class TopLevelDomain {
    /**
     * Converts a top-level domain (TLD) to its corresponding ISO 3166-1 alpha-2 country code.
     * @param tld The top-level domain to convert.
     * @returns The ISO 3166-1 alpha-2 country code.
     */
    static toAlpha2(tld: string): string;
    /**
     * Converts a top-level domain (TLD) to its corresponding ISO 3166-1 alpha-3 country code.
     * @param tld The top-level domain to convert.
     * @returns The ISO 3166-1 alpha-3 country code.
     */
    static toAlpha3(tld: string): string;
    /**
     * Converts a top-level domain (TLD) to its corresponding ISO 3166-1 numeric country code.
     * @param tld The top-level domain to convert.
     * @returns The ISO 3166-1 numeric country code.
     */
    static toNumeric(tld: string): string;
    /**
     * Converts a top-level domain (TLD) to its corresponding IOC country code.
     * @param tld The top-level domain to convert.
     * @returns The IOC country code.
     */
    static toCIOC(tld: string): string;
}
/**
 * The CIOC class provides methods to convert **International Olympic Committee** codes to different country codes.
 */
export declare class CIOC {
    /**
     * Converts a CIOC code to the corresponding Alpha-2 country code.
     * @param cioc - The CIOC code to convert.
     * @returns The corresponding Alpha-2 country code.
     */
    static toAlpha2(cioc: string): string;
    /**
     * Converts a CIOC code to the corresponding Alpha-3 country code.
     * @param cioc - The CIOC code to convert.
     * @returns The corresponding Alpha-3 country code.
     */
    static toAlpha3(cioc: string): string;
    /**
     * Converts a CIOC code to the corresponding Numeric country code.
     * @param cioc - The CIOC code to convert.
     * @returns The corresponding Numeric country code.
     */
    static toNumeric(cioc: string): string;
    /**
     * Converts a CIOC code to the corresponding Top-Level Domain (TLD).
     * @param cioc - The CIOC code to convert.
     * @returns The corresponding Top-Level Domain (TLD).
     */
    static toTLD(cioc: string): string;
}
