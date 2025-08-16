import { Street } from '@/types';
import { greenMarker, redMarker } from '@/components/ui/map-markers';

export const getMarker = (street: Street) => {
  let marker = greenMarker;
  if (!street.imagePath) marker = redMarker;
  return marker;
};
