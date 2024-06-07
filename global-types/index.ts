export interface CountriesType {
    [key: string]: Country;
  }
  export interface Country {
    alpha2Code: string;
    alpha3Code: string;
    altSpellings: string[];
    area: number;
    borders: string[];
    callingCode: string;
    capital: string;
    cioc: string;
    currencies: { [key: string]: Currency };
    demonyms: Demonyms;
    flag: Flag;
    gini: string;
    languages: { [key: string]: string };
    latLng: LatLng;
    name: string;
    nativeNames: { [key: string]: NativeName };
    numericCode: string;
    official_name: string;
    population: number;
    region: string;
    regionalBlocs: RegionalBloc[];
    subregion: string;
    timezones: string[];
    topLevelDomain: string[];
    translations: { [key: string]: string };
  }

  interface LatLng {
    country: [number, number];
    capital: [number, number];
  }
  interface Demonyms {
    eng: Demonym;
    fra: Demonym;
  }
  interface Demonym {
    f: string;
    m: string;
  }
  interface NativeNames {
    prs: NativeName;
    pus: NativeName;
    tuk: NativeName;
  }
  interface NativeName {
    official: string;
    common: string;
  }
  interface Currency {
    name: string;
    symbol: string;
  }
  interface Flag {
    small: string;
    medium: string;
    large: string;
  }
  interface RegionalBloc {
    acronym: string;
    name: string;
  }
  