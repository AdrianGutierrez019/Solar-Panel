import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getProjec() {
  return directus.request(
    readItems('project', {
      fields: ['slug','Title', 'descripcion', 'limdescr', 'ilus', 'categoria', 'list_ilus'],
    })
  );
}
