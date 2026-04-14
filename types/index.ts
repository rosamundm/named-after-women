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
  'education' |
  'international' |
  'other' |
  'all'

export interface UpstreamStreet {
  name: string;
  district: District;
  geocode: [number, number];
  entry_complete: boolean;
  eponym_name: string;
  eponym_date_of_birth?: string | null;
  eponym_date_of_death?: string | null;
  eponym_place_of_birth?: string | null;
  eponym_place_of_death?: string | null;
  eponym_description?: string;
  image_path?: string | null;
  tags?: Tag[];
}

export interface Street {
  name: string;
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
  streets: UpstreamStreet[];
  filters: {
    tag: Tag;
    district: District;
  }
}

export interface FilterProps {
  streets: Street[];
}