import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getIcon() {
  return directus.request(readItems('Icon'));
}
