import React from "react";
import {directus} from "@/lib/directus";
import { getVideo } from '@/funciones/getVideo';
import VidStyle from '@/styles/Video.module.css';

const Video = async () => {
    const video =await getVideo('video');

return (
    <>
    <div className={VidStyle.cont}>
        <div className={VidStyle.Text}>
            <p className={VidStyle.Spaw}>It s Time to Start Investing in Yourself</p>
            <h4 className={VidStyle.title01}>Need Any Consultations Contact with us</h4>
            <a className={VidStyle.btn} >Get free Quote</a>
        </div>
        <div className={VidStyle.VidInf}>
        <video controls width="640" height="360">
            <source src={`${directus.url}assets/${video.video_ilus}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>
    </div>
    </>
);
};

export default Video;
