import React from 'react';
import {directus} from '@/lib/directus';
import { getIcon } from '@/funciones/getIcon';
import { gethead } from '@/funciones/gethead';
import { getMenu } from '@/funciones/getMenu';
import styles from '@/styles/header.module.css';

const Header = async () => {
    const head =await gethead('head');
    const icon =await getIcon('Icon');
    const menu =await getMenu('menu');

  return (
    <>
        <head>
          <title>{head.title}</title>
          <link rel="icon" href={`${directus.url}assets/${icon.Fav_Icon}`} />
        </head>

      <header >
        <div >
          <ul className={styles.headers} >
            <img className={styles.headersImag} src={`${directus.url}assets/${icon.logo}?width=200`} alt="logo" />

            <>
            <img className={styles.headersImag2} src={`${directus.url}assets/${icon.direccion}?width=50`} alt="icon" />

            <span className={styles.headersText}>{head.direccion}</span>
            </>
            <>
            <img className={styles.headersImag2} src={`${directus.url}assets/${icon.call}?width=50`} alt="icon" />

            <div className={styles.headersText}>
            <p>{head.pregunta} <br />
            <i>{head.numero}</i>
            </p>
            </div>
            </>
            <>
              <a className={styles.headersImag1} href={`${head.url_facebook}`}><img src={`${directus.url}assets/${icon.item_Facebook}?width=40`} alt="logo" /></a>
              <a className={styles.headersImag1} href={`${head.url_linkedin}`}><img src={`${directus.url}assets/${icon.item_linkedin}?width=40`} alt="logo" /></a>
              <a className={styles.headersImag1} href={`${head.url_X}`}><img src={`${directus.url}assets/${icon.item_twiter}?width=40`} alt="logo" /></a>
              <a className={styles.headersImag1} href={`${head.url_Instagram}`}><img src={`${directus.url}assets/${icon.item_Instagram}?width=40`} alt="logo" /></a>
            </>
          </ul>
        </div>
        <div className={styles.constan}>
          <nav className={styles.menu}>
            <li className={styles.menu}>
              {menu.map((menu) => {
                return (
                  <ul key={menu.id}>
                    <div>
                      <button className={styles.btn}><a href={`${menu.slug}`}>{menu.Descripcion}</a></button>
                    </div>
                  </ul>
                );
                })}
            </li>
          </nav>
        </div>
      </header>
      </>
  );
};

export default Header;