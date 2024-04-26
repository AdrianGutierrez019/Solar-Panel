import { directus } from "@/lib/directus";
import { readItems } from '@directus/sdk';


export function getPrivacy() {
    return directus.request(readItems('Privacy'));
}
