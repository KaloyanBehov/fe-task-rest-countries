import { Select, SelectItem } from "@nextui-org/react";

interface RegionDropdownProps {
  setRegionQuery: (region: string) => void;
  selectedRegion: string;
}

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function RegionDropdown({
  setRegionQuery,
}: RegionDropdownProps) {
  return (
    <Select
      variant="bordered"
      placeholder="Select a region"
      selectionMode="single"
      className="max-w-sm"
    >
      {regions.map((region) => (
        <SelectItem
          key={region}
          onClick={() => setRegionQuery(region)}
          className="w-full"
        >
          {region}
        </SelectItem>
      ))}
    </Select>
  );
}
