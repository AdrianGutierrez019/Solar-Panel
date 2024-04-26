import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getService() {
  return directus.request(
    readItems('service', {
      fields: ['id', 'title', 'descripcion', 'ilus', 'categoria'],
    })
  );
}

