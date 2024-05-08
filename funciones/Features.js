import React from "react";
import {directus} from "@/lib/directus";
import { getFeatures } from '@/funciones/getFeatures';
import Image from 'next/image';
import FeatSty from '../styles/Features.module.css';

const Features = async () => {
    const features =await getFeatures('features');
return (
    <>
<div className={FeatSty.cont} >
        < div >
        <h3 className={FeatSty.title}>{features.title}</h3>
        <Image
        src={`${directus.url}assets/${features.ilus}?width=200`}
        alt=""
        width={200}
        height={200}
      />
        </div>
        <div className={FeatSty.flexti}>
          <div className={FeatSty.item}>
            <div className={FeatSty.itemim}>
            <Image
              src={`${directus.url}assets/${features.Panels_installed}?width=400`}
              alt=""
              width={100}
              height={100}
            />
            </div>
            <p className={FeatSty.number}>{features.num_installed}</p>
            <span>Panels installed</span>
          </div>
          <div className={FeatSty.item}>
            <div className={FeatSty.itemim}>
            <Image
              src={`${directus.url}assets/${features.Technical_Support}?width=400`}
              alt=""
              width={100}
              height={100}
            />
            </div>
            <p className={FeatSty.number} >{features.num_Support}</p>
            <span>Technical Support</span>
          </div>
            <div className={FeatSty.item}>
            <div className={FeatSty.itemim}>
            <Image
              src={`${directus.url}assets/${features.Years_Experience}?width=400`}
              alt=""
              width={100}
              height={100}
            />
            </div>
            <p className={FeatSty.number}>{features.num_Years}</p>
          <span>Years Experience</span>
          </div>
          <div className={FeatSty.item}>
            <div className={FeatSty.itemim}>
              <Image
                src={`${directus.url}assets/${features.Five_Star_Review}?width=300`}
                alt=""
                width={100}
                height={100}
              />
            </div>
            <p className={FeatSty.number}>{features.num_Star}</p>
            <span>Five Star Review</span>
          </div>
        </div>
      </div>
    </>
);
};

export default Features;
