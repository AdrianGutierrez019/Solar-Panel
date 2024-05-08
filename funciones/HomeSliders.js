import React from "react";
import {directus} from "@/lib/directus";
import Image from 'next/image';
import { getSlidersHome } from '@/funciones/getSlidersHome';
import CommeStyle from '@/styles/PageComment.module.css';

const SliderHome = async () => {
    const sliders = await getSlidersHome('slider');
    return (
        <div>
            <div>
                <span>Join 100 Million+ happy customers</span>
                <h3>What our <i>clients</i> says</h3>
            </div>
            <div>
                <ul>
                    {sliders.map((slider) => {
                        return (
                        <li key={slider.id}>
                            <div>
                            <Image
                                src={`${directus.url}assets/${slider.ilust}?width=300`}
                                alt=""
                                width={300}
                                height={300}
                                />
                            </div>
                            <div>
                                <div>
                                <h2>{slider.Title}</h2>
                                <h4>{slider.SubTitle}</h4>
                                </div>
                            </div>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </div>
        );
    };
    export default SliderHome;