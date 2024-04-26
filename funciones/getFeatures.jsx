import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getFeatures() {
  return directus.request(readItems('features'));
}
