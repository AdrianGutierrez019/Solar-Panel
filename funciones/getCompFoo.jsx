import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getCompFoo() {
  return directus.request(
    readItems('compfoo', {
      fields: ['id', 'url', 'descripcion'],
    })
  );
}
