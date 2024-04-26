import React from "react";
import {directus} from "@/lib/directus";
import { getComment } from '@/funciones/getComment';
import { getIcon } from '@/funciones/getIcon';
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
                    <ul className={CommeStyle.comm} key={comment.id}>
                        <div>
                            <img src={`${directus.url}assets/${comment.autor.user}?width=300`} alt="" />
                        </div>
                        <div className={CommeStyle.comm3}>
                            <div className={CommeStyle.comm2}>
                                <img src={`${directus.url}assets/${icon.commi}?width=300`} alt="" />
                                <p className={CommeStyle.text}>{comment.autor.name},{comment.autor.position}<br/>
                                {comment.autor.company}</p>
                            </div>
                            <div className={CommeStyle.text2} dangerouslySetInnerHTML={{ __html: comment.comments }}></div>
                        </div>
                    </ul>
                    );
                })}
            </ul>
        </div>
    </div>
);
};

export default Comment;
