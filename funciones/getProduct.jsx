import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getProduct() {
  return directus.request(
    readItems('products', {
      fields: ['slug', 'title', 'descripcion', 'ilus', 'categoria', 'price'],
    })
  );
}


