import fetcher from "@/lib/fetcher";
import Image from "next/image";
import { Country } from "@/global-types";
import Link from "next/link";

const fetchCountryData = async (countryName: string) => {
  try {
    const data = await fetcher(`/name/${countryName}`);
    const currentCountry = Object.values(data)[0] as Country;
    console.log(currentCountry);
    return currentCountry;
  } catch (err: any) {
    throw new Error(err.message || "Failed to Fetch Data");
  }
};

export default async function CountryPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;
  const country = await fetchCountryData(name);
  console.log("country", country.borders);

  return (
    <div className="p-8">
      <Link
        href="/"
        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 "
      >
        <span> ⇽ Back</span>
      </Link>
      <div className="flex flex-col lg:flex-row items-start lg:space-x-16 mt-6">
        <div className="lg:w-1/2">
          <Image
            width={400}
            height={300}
            loading="lazy"
            src={country.flag.large}
            alt={`Flag of ${country.name}`}
            className="mt-4"
          />
        </div>
        <div className="space-y-4 mt-6 lg:mt-0 lg:w-1/2 lg:ml-8">
          <h1 className="text-3xl font-bold">{country.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <p>
              <span className="font-semibold">Native Name: </span>
              {Object.values(country.nativeNames).map((nativeName) => (
                <span key={nativeName.common}>{nativeName.common}</span>
              ))}
            </p>
            <p>
              <span className="font-semibold">Population: </span>
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              {country.region}
            </p>
            <p>
              <span className="font-semibold">Sub Region: </span>
              {country.subregion}
            </p>
            <p>
              <span className="font-semibold">Capital: </span>
              {country.capital}
            </p>
            <p>
              <span className="font-semibold">Top Level Domain: </span>
              {country.topLevelDomain}
            </p>
            <p>
              <span className="font-semibold">Currencies: </span>
              {Array.isArray(country.currencies)
                ? country.currencies.map((currency) => currency.name).join(", ")
                : Object.values(country.currencies)
                    .map((currency: any) => currency.name)
                    .join(", ")}
            </p>
            <p>
              <span className="font-semibold">Languages: </span>
              {Array.isArray(country.languages)
                ? country.languages.map((language) => language).join(", ")
                : Object.values(country.languages)
                    .map((language: any) => language)
                    .join(", ")}
            </p>
          </div>
          <div className="mt-4 ">
            <p className="font-bold">Border Countries:</p>
            {Array.isArray(country.borders) && country.borders.length > 0 ? (
              <div className="flex flex-wrap gap-2 mt-2">
                {country.borders.map((border) => (
                  <span
                    key={border}
                    className="border border-gray-300 rounded-md px-4 py-1"
                  >
                    {border}
                  </span>
                ))}
              </div>
            ) : (
              <p>No bordering countries</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
