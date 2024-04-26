import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getComment() {
  return directus.request(
    readItems('comment', {
      fields: ['id', 'comments', { autor: ['name', 'company', 'position', 'user'] }],
    })
  );
}