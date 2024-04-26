import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getBest() {
  return directus.request(readItems('best_service'));
}
