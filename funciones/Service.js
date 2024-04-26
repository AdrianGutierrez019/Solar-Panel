import React from "react";
import {directus} from "@/lib/directus";
import { getServicedt } from '@/funciones/getServicedt';
import { getService } from '@/funciones/getService';
import ServStyle from '@/styles/Service.module.css'

const Service = async () => {
    const servicedt =await getServicedt('servicedt');
    const service =await getService('service');
return (
    <>
            <div className={ServStyle.Cont02}>
                <p className={ServStyle.Text03}>Features Service</p>
                <h3 className={ServStyle.Text04}>{servicedt.title}</h3>
            </div>
            <div className={ServStyle.Cont03}>
                <div className={ServStyle.Cont07}>
                    <h4 className={ServStyle.Text05}>{servicedt.sub_title}</h4>
                    <div dangerouslySetInnerHTML={{ __html: servicedt.description }}></div>
                </div>
                <div className={ServStyle.Cont04}>
                    <ul className={ServStyle.fle}>
                        {service.map((service) => {
                        return (
                            <ul className={ServStyle.boxhe} key={service.id}>
                                <div>
                                    <img className={ServStyle.ImaIlu} src={`${directus.url}assets/${service.ilus}?width=200`} alt="contrlogo" />
                                </div>
                                <div>
                                    <h4>{service.title}</h4>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: service.descripcion }}></div>
                            </ul>
                        );
                        })}
                    </ul>
                </div>
        </div>
    </>
);
};

export default Service;