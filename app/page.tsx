import CountriesList from "@/components/CountriesList";
import fetcher from "@/lib/fetcher";
import { CountriesType } from "@/global-types";

const getAllContries = async () => {
  const data = await fetcher("/all");
  const countriesArray = Object.values(data);
  return countriesArray as unknown as CountriesType;
};
export default async function Home() {
  const countries = await getAllContries();
  return (
    <div className="p-4">
      <CountriesList data={countries} />
    </div>
  );
}
