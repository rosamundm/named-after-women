import { LatLngExpression} from 'leaflet';

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
    externalId?: number;
    name: string;
    slug: string;
    district: District['slug'];
    geocode: LatLngExpression | [number, number] | undefined;
    entryComplete: boolean;
    eponymName: string;
    eponymDateOfBirth?: string | null;
    eponymDateOfDeath?: string | null;
    eponymPlaceOfBirth?: string | null;
    eponymPlaceOfDeath?: string | null;
    eponymDescription?: string | React.JSX.Element | React.JSX.Element[];  // used because of html-react-parse
    imagePath?: string | null;
    tags?: Tag['slug'][];
}

export interface MapProps {
  districts?: District[];
  streets: Street[];
}