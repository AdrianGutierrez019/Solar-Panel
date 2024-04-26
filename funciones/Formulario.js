
'use client'

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import ContStyle from '@/styles/Contact.module.css'

const ContactForm = () => {
    const form = useRef();
    const [captchaValue, setCaptchaValue] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        if (captchaValue) {
            emailjs.sendForm('service_464txtj', 'template_tdry6co', form.current, 'ZyYS7ZG3dCjjBA4vp')
                .then((result) => {
                    console.log(result.text);
                    alert('Mensaje enviado con éxito!');
                }, (error) => {
                    console.log(error.text);
                    alert('Error al enviar el mensaje');
                });

            e.target.reset();
            setCaptchaValue(null);
        } else {
            alert('Por favor, completa el reCAPTCHA');
        }
    };

    const onCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    return (
        <form className={ContStyle.Flex03} ref={form} onSubmit={sendEmail}>
            <div className={ContStyle.ImLa}>
                <input id='name' name='full_name' className={ContStyle.Imp}
                placeholder='Full Name' required  />
            </div>
            <div className={ContStyle.ImLa}>
                <input className={ContStyle.Imp} type='email' name='email' id='email'
                placeholder='Email Address' required  />
            </div>
            <div className={ContStyle.ImLa}>
                <input type='tel' name='Phone_number' id='phone' className={ContStyle.Imp}
                placeholder='Phone Number' required  />
            </div>
            <div className={ContStyle.ImLa}>
                <textarea id='aboutyou' className={ContStyle.Imp} name='message'
                rows='4' cols='50' required placeholder='Comments'  />
            </div>
        <div className={ContStyle.Cont08}>
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={onCaptchaChange}
                />
        </div>
            <button className={ContStyle.Bton} type="submit">Send Message</button>
        </form>
    );
};

export default ContactForm;