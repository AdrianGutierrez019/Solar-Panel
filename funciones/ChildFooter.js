import React from "react";
import {directus} from "@/lib/directus";
import { getIcon } from "@/funciones/getIcon";
import { gethead } from "@/funciones/gethead";
import { getSolarFoo } from "@/funciones/getSolarFoo";
import { getCompFoo } from "@/funciones/getCompFoo";
import styles from '@/styles/Footer.module.css';

const Footer = async () => {
  const head = await gethead("head");
  const icon = await getIcon("Icon");
  const solprfoo = await getSolarFoo("solprfoo");
  const compfoo = await getCompFoo("compfoo");

  return (
    <>
      <footer >
        <div className={styles.flex}>
      <div className={styles.flextime1}>
              <h3>Quick Contact</h3>
              <p>{head.descripcion}</p>
              <span>{head.numero}</span>
              <p>{head.direccion}</p>
      </div>

      <div className={styles.flextime2}>
      <h3>Company</h3>
                  <ul>
                    {compfoo.map((compfoo) => {
                      return (
                        <li key={compfoo.id}>
                                {compfoo.descripcion}
                        </li>
                      );
                    })}
                  </ul>
      </div>

      <div className={styles.flextime2}>
      <h3>Solar Products</h3>
                      <ul>
                        {solprfoo.map((solprfoo) => {
                          return (
                            <li key={solprfoo.id}>
                                <>
                                    {solprfoo.descripcion}
                                </>
                            </li>
                          );
                        })}
                      </ul>
      </div>

      <div className={styles.flextime}>
      <h3>Social Network</h3>
              <div>
                <div>
                  <>
                    <a className={styles.imag} href={`${head.url_facebook}`}><img src={`${directus.url}assets/${icon.item_Facebook}?width=40`} alt="logo"/></a>
                    </>
                    <>
                    <a className={styles.imag} href={`${head.url_linkedin}`}><img src={`${directus.url}assets/${icon.item_linkedin}?width=40`} alt="logo"/></a>
                    </>
                    <>
                    <a className={styles.imag} href={`${head.url_X}`}><img src={`${directus.url}assets/${icon.item_twiter}?width=40`}alt="logo"/></a>
                  </>
                  </div>
                  <div >
                  <h5>Descargar PDF</h5>
                          <p>Haga clic para descargar el catalogo:</p>
                          <button className={styles.btn}><a
                            href={`${directus.url}assets/${icon.Catalogo}.pdf`}
                            download
                          >
                            Descargar PDF
                          </a></button>
                  </div>
            </div>
      </div>
      </div>
      <div className={styles.flex1}>

      <img src={`${directus.url}assets/${icon.ctlogo}?width=200`}alt="contrlogo"/>



      <div className={styles.text}>
      <p >
        &copy; 2024 Copyright Solar Light, All Rrights Reserved. With
          Love <i></i> by
        <a href="https://www.templatemonster.com/authors/themeslay/">
          Themeslay
        </a>
      </p>
      </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;
