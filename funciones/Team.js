import React from "react";
import {directus} from "@/lib/directus";
import { getTeam } from '@/funciones/getTeam';
import { getIcon } from '@/funciones/getIcon';
import TeamStyle from '../styles/Team.module.css';

const Team = async () => {

    const team =await getTeam('team');
    const icon =await getIcon('Icon');

    return (
    <>
        <div >
            <div className={TeamStyle.cont}>
                <ul className={TeamStyle.cont01}>
                    {team.map((team) => {
                        return (
                        <ul key={team.id}>
                            <div className={TeamStyle.imgbox}>
                                <img src={`${directus.url}assets/${team.ilus}?width=350`} alt="" />
                                <div className={TeamStyle.boxhe}>
                                    <div>
                                        <p>{team.name}</p>
                                        <span>{team.position}</span>
                                    </div>
                                    <div className={TeamStyle.flexi01}>
                                            <div className={TeamStyle.Cont02}><a href={`${team.url_facebook}`}><img src={`${directus.url}assets/${icon.item_Facebook}?width=30`} alt="Facebook" /></a></div>
                                            
                                            <div className={TeamStyle.Cont02}><a href={team.url_linkedin}><img src={`${directus.url}assets/${icon.item_linkedin}?width=30`} alt="LinkedIn" /></a></div>
                                            
                                            <div className={TeamStyle.Cont02}><a href={`${team.url_X}`}><img src={`${directus.url}assets/${icon.item_twiter}?width=30`} alt="Twitter" /></a></div>
                                            

                                    </div>
                                </div>
                            </div>
                        </ul>
                        );
                    })}
                </ul>
            </div>
        </div>
    </>
    );
};

export default Team;