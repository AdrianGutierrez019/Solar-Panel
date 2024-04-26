import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getHistory() {
  return directus.request(readItems('History'));
}
