import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

type countryCardProps = {
  country: string;
  population: number;
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
  return (
    <li>
      <Link
        href={`/country/${country.toLocaleLowerCase()}`}
        className="cursor-pointer"
      >
        <Card className="py-4 rounded-md px-4 dark:bg-dark-blue">
          <CardBody className="py-2">
            <Image
              alt="Card background"
              className="object-cover"
              src={flag.large}
              width={270}
            />
          </CardBody>
          <CardHeader className="pt-2 px-4 flex-col items-start">
            <p className="uppercase mb-4 font-extrabold text-2xl">{country}</p>
            <p>Population: {population.toLocaleString()}</p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>Capital: {capital}</p>
          </CardHeader>
        </Card>
      </Link>
    </li>
  );
};

export default CountryCard;
