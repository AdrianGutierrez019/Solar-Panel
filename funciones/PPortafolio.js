import React from "react";
import {directus} from "@/lib/directus";
import { getProjec } from '@/funciones/getProjec';
import PortaProj from '../styles/PPortafolio.module.css';

const Portafolio = async () => {
    const project =await getProjec('project');

return (
    <>
<div >
    <div className={PortaProj.proj} >
            <div>
                <div className={PortaProj.essup}>
                    <p >Recent Projects</p>
                </div>
                <div className={PortaProj.encabezado}>
                    <h3>Solar System Gallery</h3>
                </div>
            <div className={PortaProj.item}>
            <ul className={PortaProj.item1}>
                {project.map((project) => {
                return (
                <ul className={PortaProj.item2} key={project.id}>
                    <div className={PortaProj.proj} >
                        <div className={PortaProj.Imag}>
                            <img src={`${directus.url}assets/${project.ilus}?width=300`} alt="logo" />
                        </div>
                            <h2 className={PortaProj.title}>
                                {project.Title}
                            </h2>
                            <div className={PortaProj.text}>
                            <div dangerouslySetInnerHTML={{ __html: project.limdescr }}></div>
                                <p ><a href={`/Projects/${project.slug}`} class="boton">Ver más</a></p>
                            </div>
                        <div className={PortaProj.oculto}>
                            <span>{project.categoria}</span>
                        </div>
                    </div>
                </ul>
                );
            })}
            </ul>
            </div>
        </div>
        </div>
    </div>
    </>
);
};

export default Portafolio;
