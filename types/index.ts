export type District =
  'Charlottenburg-Wilmersdorf' |
  'Friedrichshain-Kreuzberg' |
  'Lichtenberg' |
  'Marzahn-Hellersdorf' |
  'Mitte' |
  'Neukölln' |
  'Pankow' |
  'Reinickendorf' |
  'Spandau' |
  'Steglitz-Zehlendorf' |
  'Tempelhof-Schöneberg' |
  'Treptow-Köpenick' |
  'all';

// todo: make tags more verbose
export type Tag =
  'literature' |
  'art' |
  'music, film, theatre' |
  'resistance' |
  'politics & activism' |
  'science' |
  'international' |
  'other' |
  'all'

export interface Street {
  externalId?: number;
  name: string;
  slug: string;
  district: District;
  geocode: [number, number];
  entryComplete: boolean;
  eponymName: string;
  eponymDateOfBirth?: string | null;
  eponymDateOfDeath?: string | null;
  eponymPlaceOfBirth?: string | null;
  eponymPlaceOfDeath?: string | null;
  eponymDescription?: string | React.JSX.Element | React.JSX.Element[]; // used because of html-react-parse
  imagePath?: string | null;
  tags?: Tag[];
}

export interface MapProps {
  streets: Street[];
  filters: {
    tag: Tag;
    district: District;
  }
}

export interface FilterProps {
  streets: Street[];
}