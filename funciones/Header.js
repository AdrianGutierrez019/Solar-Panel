import React from 'react';
import {directus} from '@/lib/directus';
import { getIcon } from '@/funciones/getIcon';
import { gethead } from '@/funciones/gethead';
import { getMenu } from '@/funciones/getMenu';
import Image from 'next/image';
import Head from 'next/head';
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
          <Image
            className={styles.headersImag}
            src={`${directus.url}assets/${icon.logo}?width=200`}
            alt="logo"
            width={200}
            height={50}
          />

          <>
            <Image
              className={styles.headersImag2}
              src={`${directus.url}assets/${icon.direccion}?width=50`}
              alt="icon"
              width={50}
              height={50}
            />
            <span className={styles.headersText}>{head.direccion}</span>
          </>

          <>
            <Image
              className={styles.headersImag2}
              src={`${directus.url}assets/${icon.call}?width=50`}
              alt="icon"
              width={50}
              height={50}
            />
          </>
            <div className={styles.headersText}>
            <p>{head.pregunta} <br />
            <i>{head.numero}</i>
            </p>
            </div>
            <>
              <a className={styles.headersImag1} href={`${head.url_facebook}`}>
                <Image src={`${directus.url}assets/${icon.item_Facebook}?width=40`} alt="logo" width={40} height={40} />
              </a>
              <a className={styles.headersImag1} href={`${head.url_linkedin}`}>
                <Image src={`${directus.url}assets/${icon.item_linkedin}?width=40`} alt="logo" width={40} height={40} />
              </a>
              <a className={styles.headersImag1} href={`${head.url_X}`}>
                <Image src={`${directus.url}assets/${icon.item_twiter}?width=40`} alt="logo" width={40} height={40} />
              </a>
              <a className={styles.headersImag1} href={`${head.url_Instagram}`}>
                <Image src={`${directus.url}assets/${icon.item_Instagram}?width=40`} alt="logo" width={40} height={40} />
              </a>
            </>
          </ul>
        </div>
        <div className={styles.constan}>
          <nav className={styles.menu}>
            <list className={styles.menu}>
              {menu.map((menu) => {
                return (
                  <list key={menu.id}>
                    <div>
                      <a className={styles.btn} href={`${menu.url}`}>{menu.Descripcion}</a>
                    </div>
                  </list>
                );
                })}
            </list>
          </nav>
        </div>
      </header>
      </>
  );
};

export default Header;