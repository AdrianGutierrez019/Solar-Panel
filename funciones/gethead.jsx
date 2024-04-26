import{directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function gethead() {
  return directus.request(readItems('head'));
}
