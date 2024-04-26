import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getPage() {
  return directus.request(
    readItems('page', {
      fields: ['id', 'url', 'descripcion'],
    })
  );
}
