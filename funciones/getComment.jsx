import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getComment() {
  return directus.request(
    readItems('comment', {
      fields: ['id', 'comments', 'commentautor_name','commentautor_position','commentautor_company','commentautor_ilust' ],
    })
  );
}