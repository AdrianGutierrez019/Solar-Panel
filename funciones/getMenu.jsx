import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getMenu() {
  return directus.request(
    readItems('menu', {
      fields: ['slug', 'url', 'Descripcion'],
    })
  );
}
