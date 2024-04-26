import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getPostDT() {
  return directus.request(readItems('post_dt'));
}
