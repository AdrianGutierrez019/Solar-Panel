import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getBlog() {
  return directus.request(
    readItems('blog', {
      fields: ['slug', 'title', 'descripcion', 'descripcion01', 'ilus', 'date', { autor: ['name', 'company', 'position'] }],
    })
  );
}
