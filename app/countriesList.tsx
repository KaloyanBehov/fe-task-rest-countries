import React from "react";
import { ACCESS_TOKEN } from "@/tokens";
import CountryCard from "./components/cards/countryCard";
async function getContries() {
  try {
    const response = fetch(`https://countryapi.io/api/all`, {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    });
    const data = await (await response).json();
    console.log(data);
    return data;
  } catch (error) {}
}
export default async function CountriesList() {
  const data = await getContries();
  const arrData = Array.from(data);
  return (
    <>
      {Object.keys(data).length > 0 && (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {Object.keys(data).map((countryCode) => (
            // <li key={countryCode}>{data[countryCode].name}</li>
            <CountryCard
              key={countryCode}
              country={data[countryCode].name}
              population={data[countryCode].population}
              region={data[countryCode].region}
              capital={data[countryCode].capital}
              flag={data[countryCode].flag}
            />
          ))}
        </ul>
      )}
    </>
  );
}
