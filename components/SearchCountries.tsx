import { Input } from "@nextui-org/input";
import { Search } from "lucide-react";
import RegionDropdown from "./RegionSelect";
import { ChangeEvent } from "react";

interface SearchCountriesProps {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  setRegionQuery: (region: string) => void;
  selectedRegion: string;
}

export default function SearchCountries({
  setSearchQuery,
  searchQuery,
  setRegionQuery,
  selectedRegion,
}: SearchCountriesProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-between my-3">
      <Input
        variant="bordered"
        className="max-w-sm"
        placeholder="Search for a country..."
        startContent={<Search />}
        onChange={handleInputChange}
        isClearable
        onClear={() => setSearchQuery("")}
        value={searchQuery}
      />
      <RegionDropdown
        setRegionQuery={setRegionQuery}
        selectedRegion={selectedRegion}
      />
    </div>
  );
}
