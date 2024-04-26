import React from "react";
import {directus} from "@/lib/directus";
import { getPartner } from '@/funciones/getPartner';
import AliadosP from '../styles/Aliados.module.css';

const Aliados = async () => {
    const aliados =await getPartner('aliados');
return (
    <>
    <div className={AliadosP.cont}>
    <div >
        <div className={AliadosP.title}>
        <h3 >Our Proud Partner</h3>
        </div>
    </div>
    <div >
        <div >
        <ul className={AliadosP.item}>
            {aliados.map((aliados) => {
                return (
                <ul key={aliados.id}>
                    <img src={`${directus.url}assets/${aliados.ilus}?width=300`} alt="logo" />
                </ul>
                );
            })}
        </ul>
        </div>
    </div>
    </div>
    </>
);
};

export default Aliados;