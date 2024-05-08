import React from "react";
import {directus} from "@/lib/directus";
import { getProduct } from '@/funciones/getProduct';
import Image from 'next/image';
import styles from '../styles/Shop.module.css'

const Shop = async () => {
    const products =await getProduct('products');
return (
    <>
    <div >
    <div >
        <div >
        <h2 className={styles.title} >Our Services Range</h2>
        </div>
    </div>
    <div >
        <div>
        <ul className={styles.Flexkey}>
            {products.map((products) => {
                return (
                <list className={styles.items} key={products.id}>
                    <a href={`/Home`}>
                    <h4 className={styles.info}>{products.title}</h4>
                    </a>
                    <div>
                    <Image
                    src={`${directus.url}assets/${products.ilus}?width=350`}
                    alt="logo"
                    width={350}
                    height={350}
                    />
                    <p className={styles.oculto}>$ {products.price}</p>
                    </div>
                    <button className={styles.oculto}>read more</button>
                </list>
                );
            })}
            </ul>
        </div>
    </div>
    </div>
    </>
);
};

export default Shop;
