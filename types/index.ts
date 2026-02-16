export interface District {
  id: number;
  name: string;
  slug: string;
}

export type Tag = "literature & arts" | "resistance" | "science" | "politics";

export interface Street {
  externalId?: number;
  name: string;
  slug: string;
  district: District['slug'];
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

export interface MapBoxProps {
  streets: Street[];
}

export interface MapProps {
  streets: Street[];
}

export interface FilterProps {
  streets: Street[];
}
