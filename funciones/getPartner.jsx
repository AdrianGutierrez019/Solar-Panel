import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getPartner() {
  return directus.request(
    readItems('Aliados', {
      fields: ['id', 'company', 'ilus'],
    })
  );
}
