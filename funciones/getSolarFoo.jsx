import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getSolarFoo() {
  return directus.request(
    readItems('solprfoo', {
      fields: ['id', 'url', 'descripcion'],
    })
  );
}
