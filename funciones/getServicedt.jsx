import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';



export function getServicedt() {
  return directus.request(readItems('servicedt'));
}
