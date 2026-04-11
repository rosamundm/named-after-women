import { Street, UpstreamStreet } from '@/types';
import { greenMarker, redMarker } from '@/components/ui/map/map-markers';

export const getMarker = (street: Street) => {
  let marker = greenMarker;
  if (!street.imagePath) marker = redMarker;
  return marker;
};

export const camelizeStreetProps = (streets: UpstreamStreet[]): Street[] => 
  streets.map((street: UpstreamStreet) =>
    ({
      name: street.name,
      slug: street.slug,
      district: street.district,
      geocode: street.geocode,
      entryComplete: street.entry_complete,
      eponymName: street.eponym_name,
      eponymDateOfBirth: street.eponym_date_of_birth,
      eponymDateOfDeath: street.eponym_date_of_death,
      eponymPlaceOfBirth: street.eponym_place_of_birth,
      eponymPlaceOfDeath: street.eponym_place_of_death,
      eponymDescription: street.eponym_description,
      imagePath: street.image_path,
      tags: street.tags
}))
