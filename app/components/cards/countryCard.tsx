import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
type countryCardProps = {
  country: string;
  population: string;
  region: string;
  capital: string;
  flag: {
    small: string;
    medium: string;
    large: string;
  };
};
const CountryCard = ({
  country,
  population,
  region,
  capital,
  flag,
}: countryCardProps) => {
  console.log(flag);
  return (
    <Link href="/" className="cursor-pointer">
      <Card className="py-4 bg-white rounded-md">
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover "
            src={flag.large}
            width={270}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{country}</p>
          <p className="">Population: {population}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </CardHeader>
      </Card>
    </Link>
  );
};
export default CountryCard;
