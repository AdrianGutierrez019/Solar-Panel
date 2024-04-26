import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getTestimonial() {
  return directus.request(
    readItems('post', {
      fields: ['id', 'title', 'imagen', 'descripcion', 'ilus', 'date', { autor: ['name', 'company', 'position'] }],
    })
  );
}
