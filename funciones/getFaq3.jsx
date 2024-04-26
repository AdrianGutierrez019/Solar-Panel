import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getFaq3() {
  return directus.request(
    readItems('faq3', {
      fields: ['id', 'question', 'res', 'response'],
    })
  );
}

