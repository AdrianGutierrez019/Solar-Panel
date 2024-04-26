import React from "react";
import {directus} from "@/lib/directus";
import { getProduct } from '@/funciones/getProduct';
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
                <ul className={styles.items} key={products.id}>
                    <a href={`/Shop/${products.slug}`}>
                    <h4 className={styles.info}>{products.title}</h4>
                    </a>
                    <div>
                    <img src={`${directus.url}assets/${products.ilus}?width=300`} alt="logo" />
                    <div dangerouslySetInnerHTML={{ __html: products.descripcion }}></div>
                    <span className={styles.oculto}>{products.categoria}</span>
                    <p className={styles.oculto}>$ {products.price}</p>
                    </div>
                    <button className={styles.oculto}>read more</button>
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

export default Shop;
