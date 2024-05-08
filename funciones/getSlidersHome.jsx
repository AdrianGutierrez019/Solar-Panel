import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';


export function getSlidersHome() {
    return directus.request(
    readItems('SlidersHome', {
        fields: [ 'id', 'Title','SubTitle','Ilust','Description'],
    })
);
}