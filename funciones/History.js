import React from "react";
import {directus} from "@/lib/directus";
import { getHistory } from '@/funciones/getHistory';
import { gethead } from '@/funciones/gethead';
import Image from 'next/image';
import styles from '../styles/History.module.css';

const History = async () => {

    const history =await getHistory('History');
    const head =await gethead('head');

return (
    <>
        <div className={styles.flexzo}>
        <div className={styles.item} >
        <Image
            src={`${directus.url}assets/${history.ilus}?width=300`}
            alt="logo"
            width={300}
            height={300}
            />
        <p className={styles.cat}>12+ Years of Experience</p>
        </div>
        <div className={styles.Hist}>
        <p className={styles.essup}>Our Story</p>
        <h4 className={styles.encabezado}>{history.title}</h4>
        {history.Tex && (
                        <div dangerouslySetInnerHTML={{ __html: history.Tex }}></div>
                    )}
        <div>
        <span className={styles.preg}>{head.pregunta}</span>
        <p className={styles.phone}>{head.numero}</p>
        </div>
        </div>
        </div>
    </>
);
};

export default History;