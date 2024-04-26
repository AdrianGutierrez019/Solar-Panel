import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getBestS() {
  return directus.request(
    readItems('BestService', {
      fields: [{ services: ['title', 'ilus'] }],
    })
  );
}
