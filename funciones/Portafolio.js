import React from "react";
import {directus} from "@/lib/directus";
import { getProjec } from '@/funciones/getProjec';
import Image from 'next/image';
import PortaProj from '../styles/Portafolio.module.css';

const Portafolio = async () => {
    const project =await getProjec('project');

return (
    <>
<div >
    <div className={PortaProj.proj} >
        <div >
        <div >
            <div>
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
                <list className={PortaProj.item2} key={project.id}>
                    <div className={PortaProj.proj} >
                        <div className={PortaProj.Imag}>
                        <Image
                        src={`${directus.url}assets/${project.ilus}?width=300`}
                        alt="logo"
                        width={300}
                        height={300}
                        />
                        </div>
                            <h2 className={PortaProj.title}>
                                {project.Title}
                            </h2>
                            <div className={PortaProj.text}>
                                <p ><a href={`/Projects`} class="boton">Ver más</a></p>
                            </div>
                    </div>
                </list>
                );
            })}
            </ul>
        </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    </>
);
};

export default Portafolio;
