import { Street, UpstreamStreet } from '@/types';

export const camelizeStreetProps = (streets: UpstreamStreet[]): Street[] => 
  streets.map((street: UpstreamStreet) =>
    ({
      name: street.name,
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
