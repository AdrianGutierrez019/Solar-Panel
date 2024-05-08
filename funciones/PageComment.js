import React from "react";
import {directus} from "@/lib/directus";
import { getComment } from '@/funciones/getComment';
import { getIcon } from '@/funciones/getIcon';
import Image from 'next/image';
import CommeStyle from '@/styles/PageComment.module.css';

const Comment = async () => {
    const comment =await getComment('comment');
    const icon =await getIcon('Icon');
return (
    <div className={CommeStyle.cont}>
        <div className={CommeStyle.title}>
            <span className="">Join 100 Million+ happy customers</span>
            <h3 className={CommeStyle.text3}>What our <i className={CommeStyle.text4}>clients</i> says</h3>
        </div>
        <div className={CommeStyle.cont2}>
            <ul className={CommeStyle.item}>
                {comment.map((comment) => {
                    return (
                    <li className={CommeStyle.comm} key={comment.id}>
                        <div>
                        <Image
                        src={`${directus.url}assets/${comment.commentautor_ilust}?width=300`}
                        alt=""
                        width={300}
                        height={300}
                        />
                        </div>
                        <div className={CommeStyle.comm3}>
                            <div className={CommeStyle.comm2}>
                            <Image
                            src={`${directus.url}assets/${icon.commi}?width=300`}
                            alt=""
                            width={300}
                            height={300}
                            />
                                <p className={CommeStyle.text}>{comment.commentautor_name},{comment.commentautor_position}<br/>
                                {comment.autor_company}</p>
                            </div>
                            <div className={CommeStyle.text2} dangerouslySetInnerHTML={{ __html: comment.comments }}></div>
                        </div>
                    </li>
                    );
                })}
            </ul>
        </div>
    </div>
);
};

export default Comment;
