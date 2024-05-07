import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getTeam() {
  return directus.request(
    readItems('team', {
      fields: ['id', 'name', 'position', 'company', 'ilus','url_facebook','url_linkedin','url_X'],
    })
  );
}
