import { Alpha2, Alpha3, CIOC, Numeric, TopLevelDomain } from "../src/index";

// Mock the worldCountries data for consistent testing
jest.mock("world-countries", () => [
	{ cca2: "US", cca3: "USA", ccn3: "840", tld: ".us", cioc: "USA" },
	{ cca2: "CA", cca3: "CAN", ccn3: "124", tld: ".ca", cioc: "CAN" },
]);

describe("Country Code Conversion", () => {
	describe("Alpha2 class", () => {
		test("Converts from Alpha-2 to Alpha-3", () => {
			expect(Alpha2.toAlpha3("US")).toBe("USA");
		});

		test("Converts from Alpha-2 to Numeric", () => {
			expect(Alpha2.toNumeric("US")).toBe("840");
		});

		test("Converts from Alpha-2 to TLD", () => {
			expect(Alpha2.toTLD("US")).toBe(".us");
		});

		test("Converts from Alpha-2 to CIOC", () => {
			expect(Alpha2.toCIOC("US")).toBe("USA");
		});

		test("Throws error when Alpha-2 code is not found", () => {
			expect(() => Alpha2.toAlpha3("XX")).toThrow(
				"Country not found for cca2 XX",
			);
		});
	});

	describe("Alpha3 class", () => {
		test("Converts from Alpha-3 to Alpha-2", () => {
			expect(Alpha3.toAlpha2("USA")).toBe("US");
		});

		test("Converts from Alpha-3 to Numeric", () => {
			expect(Alpha3.toNumeric("USA")).toBe("840");
		});

		test("Converts from Alpha-3 to TLD", () => {
			expect(Alpha3.toTLD("USA")).toBe(".us");
		});

		test("Converts from Alpha-3 to CIOC", () => {
			expect(Alpha3.toCIOC("USA")).toBe("USA");
		});

		test("Throws error when Alpha-3 code is not found", () => {
			expect(() => Alpha3.toAlpha2("XYZ")).toThrow(
				"Country not found for cca3 XYZ",
			);
		});
	});

	describe("Numeric class", () => {
		test("Converts a numeric country code to Alpha-2", () => {
			expect(Numeric.toAlpha2("840")).toBe("US");
		});

		test("Converts a numeric country code to Alpha-3", () => {
			expect(Numeric.toAlpha3("840")).toBe("USA");
		});

		test("Converts a numeric country code to TLD", () => {
			expect(Numeric.toTLD("840")).toBe(".us");
		});

		test("Converts a numeric country code to CIOC", () => {
			expect(Numeric.toCIOC("840")).toBe("USA");
		});

		test("Throws error when Numeric code is not found", () => {
			expect(() => Numeric.toAlpha2("999")).toThrow(
				"Country not found for ccn3 999",
			);
		});
	});

	describe("TopLevelDomain class", () => {
		test("Converts a TLD to Alpha-2", () => {
			expect(TopLevelDomain.toAlpha2(".us")).toBe("US");
		});

		test("Converts a TLD to Alpha-3", () => {
			expect(TopLevelDomain.toAlpha3(".us")).toBe("USA");
		});

		test("Converts a TLD to Numeric", () => {
			expect(TopLevelDomain.toNumeric(".us")).toBe("840");
		});

		test("Converts a TLD to CIOC", () => {
			expect(TopLevelDomain.toCIOC(".us")).toBe("USA");
		});

		test("Throws error when TLD is not found", () => {
			expect(() => TopLevelDomain.toAlpha2(".xyz")).toThrow(
				"Country not found for tld .xyz",
			);
		});
	});

	describe("CIOC class", () => {
		test("Converts a CIOC code to Alpha-2", () => {
			expect(CIOC.toAlpha2("USA")).toBe("US");
		});

		test("Converts a CIOC code to Alpha-3", () => {
			expect(CIOC.toAlpha3("USA")).toBe("USA");
		});

		test("Converts a CIOC code to Numeric", () => {
			expect(CIOC.toNumeric("USA")).toBe("840");
		});

		test("Converts a CIOC code to TLD", () => {
			expect(CIOC.toTLD("USA")).toBe(".us");
		});

		test("Throws error when CIOC code is not found", () => {
			expect(() => CIOC.toAlpha2("XYZ")).toThrow(
				"Country not found for cioc XYZ",
			);
		});
	});
});
