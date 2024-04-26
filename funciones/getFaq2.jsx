import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getFaq2() {
  return directus.request(
    readItems('faq2', {
      fields: ['id', 'question', 'res', 'response'],
    })
  );
}
