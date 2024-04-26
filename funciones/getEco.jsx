import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getEco() {
  return directus.request(readItems('eco_friendly'));
}
