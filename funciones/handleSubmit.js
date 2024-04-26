'use server';

import { client } from "@/lib/directus";
import { createItem } from "@directus/sdk";

const handleSubmit = async () => {
    const full_name = formData.get('full_name');
    const email = formData.get('email');
    const Phone_number = formData.get('Phone_number');
    const message = formData.get('message');
    try {
        await client.request(
            createItem('user_data', {
                full_name,
                email,
                Phone_number,
                message,
            })
        );
    } catch (error) {
        console.log(error);
    }
};

export default handleSubmit;
