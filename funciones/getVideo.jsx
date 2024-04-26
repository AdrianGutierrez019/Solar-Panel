import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getVideo() {
  return directus.request(readItems('video'));
}
