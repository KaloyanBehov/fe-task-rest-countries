"use client";
import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import SearchCountries from "./SearchCountries";
import { CountriesType } from "@/global-types";

interface Props {
  data: CountriesType;
}

const CountriesList = ({ data }: Props) => {
  const [countries, setCountries] = useState<CountriesType>(data);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [regionQuery, setRegionQuery] = useState<string>("");
  const [filteredCountries, setFilteredCountries] = useState<CountriesType>({});

  useEffect(() => {
    const filtered = Object.keys(countries)
      .filter((countryCode) => {
        const country = countries[countryCode];
        const matchesSearch = country.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesRegion = regionQuery
          ? country.region === regionQuery
          : true;
        return matchesSearch && matchesRegion;
      })
      .reduce((acc, countryCode) => {
        acc[countryCode] = countries[countryCode];
        return acc;
      }, {} as CountriesType);

    setFilteredCountries(filtered);
  }, [searchQuery, regionQuery, countries]);

  return (
    <div>
      <div>
        <SearchCountries
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          setRegionQuery={setRegionQuery}
          selectedRegion={regionQuery}
        />
      </div>
      {Object.keys(filteredCountries).length > 0 && (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {Object.keys(filteredCountries).map((countryCode) => (
            <CountryCard
              key={countryCode}
              country={filteredCountries[countryCode].name}
              population={filteredCountries[countryCode].population}
              region={filteredCountries[countryCode].region}
              capital={filteredCountries[countryCode].capital}
              flag={filteredCountries[countryCode].flag}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountriesList;
