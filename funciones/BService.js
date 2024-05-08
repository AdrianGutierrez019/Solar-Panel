import React from "react";
import {directus} from "@/lib/directus";
import { getService } from '@/funciones/getService';
import { getBest } from '@/funciones/getBest';
import { getBestS } from '@/funciones/getBestS';
import BSerStyle from '../styles/BService.module.css';
import Image from 'next/image';

const BService = async () => {
    const service =await getService('service');
    const best_service =await getBest('best_service');
    const BestService =await getBestS('BestService');

return (
    <>
    <div className={BSerStyle.flexi}>
        <div className={BSerStyle.text}>
            <p >Best Services</p>
            <h4 className={BSerStyle.title}>{best_service.title}</h4>
            <p >{best_service.description}</p>
        </div>
        <div className={BSerStyle.serv}>
            <list className={BSerStyle.Flexi}>
                {BestService.map((BestService) => {
                    return (
                    <list key={BestService.id}>
                        <div>
                        <a href={`/Service`}>
                        <Image
                            src={`${directus.url}assets/${BestService.services.ilus}?width=400`}
                            alt="logo"
                            width={400}
                            height={400}
                        />
                        </a>
                        </div>
                    </list>
                    );
                })}
            </list>
        </div>
    </div>
    </>
);
};

export default BService;
