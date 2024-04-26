import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getFaq1() {
  return directus.request(
    readItems('faq1', {
      fields: ['id', 'question', 'res', 'response'],
    })
  );
}
