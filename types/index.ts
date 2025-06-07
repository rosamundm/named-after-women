export interface Tag {
    id: number;
    name: string;
    slug: string;
}

// todo: convert to enum?
export interface District {
    id: number;
    name: string;
    slug: string;
}

export interface Street {
    id?: number;
    name: string;
    slug: string;
    district: District['slug'];
    geocode: [number, number];
    entryComplete: boolean;
    eponymName: string;
    eponymDateOfBirth?: string;
    eponymDateOfDeath?: string;
    eponymPlaceOfBirth?: string;
    eponymPlaceOfDeath?: string;
    eponymDescription: string | React.JSX.Element | React.JSX.Element[];  // used because of html-react-parse
    imagePath?: string;
    tags?: Tag['slug'][];
}

export interface MapProps {
  districts?: District[];
  streets: Street[];
}