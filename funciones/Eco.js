import React from "react";
import {directus} from "@/lib/directus";
import { getEco } from '@/funciones/getEco';
import EcoStyle from '@/styles/Eco.module.css'

const Eco = async () => {

    const eco_friendly =await getEco('eco_friendly');

return (
    <>
    <div className={EcoStyle.flex}>
        <div  className={EcoStyle.ecoti}>
            <div >
                <span className={EcoStyle.span}>Eco Friendly</span>
                <h4 className={EcoStyle.title} >{eco_friendly.title}</h4>
                <div className={EcoStyle.descri} >{ eco_friendly.description }</div>
            </div>
            <div className={EcoStyle.twice}>
                <div className={EcoStyle.twop}>
                    <div className={EcoStyle.twopimg}>
                        <img  src={`${directus.url}assets/${eco_friendly.electricity}?width=200 x 200`} alt="" />
                    </div>
                    <p className={EcoStyle.subTitle}>{eco_friendly.electricity_title}</p>
                    <p className={EcoStyle.Parr}>{eco_friendly.electricity_description}</p>
                </div>
                <div className={EcoStyle.twop}>
                    <div className={EcoStyle.twopimg}>
                        <img src={`${directus.url}assets/${eco_friendly.energy}?width=200 x 200`} alt="" />
                    </div>
                    <p className={EcoStyle.subTitle}>{eco_friendly.title_energy}</p>
                    <p className={EcoStyle.Parr}>{eco_friendly.description_energy}</p>
                </div>
            </div>
        </div>
            <div className={EcoStyle.imag}>
            <img src={`${directus.url}assets/${eco_friendly.ilust}?width=400`} alt="logo" />
            </div>
    </div>
    </>
);
};

export default Eco;
