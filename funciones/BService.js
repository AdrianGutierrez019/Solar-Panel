import React from "react";
import {directus} from "@/lib/directus";
import { getService } from '@/funciones/getService';
import { getBest } from '@/funciones/getBest';
import { getBestS } from '@/funciones/getBestS';
import BSerStyle from '../styles/BService.module.css';

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
            <div dangerouslySetInnerHTML={{ __html: best_service.description }}></div>
        </div>
        <div className={BSerStyle.serv}>
            <ul className={BSerStyle.Flexi}>
                {BestService.map((BestService) => {
                    return (
                    <ul key={BestService.id}>
                        <div>
                        <a href={`/Service`}><img src={`${directus.url}assets/${BestService.services.ilus}?width=400`} alt="logo" /></a>
                        </div>
                    </ul>
                    );
                })}
            </ul>
        </div>
    </div>
    </>
);
};

export default BService;
