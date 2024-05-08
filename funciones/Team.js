import React from "react";
import {directus} from "@/lib/directus";
import { getTeam } from '@/funciones/getTeam';
import { getIcon } from '@/funciones/getIcon';
import Image from 'next/image';
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
                        <list key={team.id}>
                            <div className={TeamStyle.imgbox}>
                            <Image
                            src={`${directus.url}assets/${team.ilus}?width=350`}
                            alt=""
                            width={350}
                            height={350}
                            />
                                <div className={TeamStyle.boxhe}>
                                    <div>
                                        <p>{team.name}</p>
                                        <span>{team.position}</span>
                                    </div>
                                    <div className={TeamStyle.flexi01}>
                                    <div className={TeamStyle.Cont02}><a href={`${team.url_facebook}`}><Image src={`${directus.url}assets/${icon.item_Facebook}?width=30`} alt="Facebook" width={30} height={30} /></a></div>
                                    <div className={TeamStyle.Cont02}><a href={team.url_linkedin}><Image src={`${directus.url}assets/${icon.item_linkedin}?width=30`} alt="LinkedIn" width={30} height={30} /></a></div>
                                    <div className={TeamStyle.Cont02}><a href={`${team.url_X}`}><Image src={`${directus.url}assets/${icon.item_twiter}?width=30`} alt="Twitter" width={30} height={30} /></a></div>
                                    </div>
                                </div>
                            </div>
                        </list>
                        );
                    })}
                </ul>
            </div>
        </div>
    </>
    );
};

export default Team;