import React from "react";
import {directus} from "@/lib/directus";
import { getBlog } from '@/funciones/getBlog';
import Image from 'next/image';
import BlogStyle from '@/styles/PageBlog.module.css'

const Blog = async () => {
    const blog =await getBlog('blog');
return (
    <div >
            <ul className={BlogStyle.Cont02}>
                {blog.map((blog) => {
                return (
                    <list className={BlogStyle.Cont03} key={blog.id}>
                        <div className={BlogStyle.Cont05}>
                        <Image
                        className={BlogStyle.ImgIl}
                        src={`${directus.url}assets/${blog.ilus}?width=350`}
                        alt="blog"
                        width={350}
                        height={350}
                        />
                            <span className={BlogStyle.Date01}>{blog.date}</span>
                        </div>
                        <div className={BlogStyle.Cont04}>
                            <div>
                                <h4>{blog.title}</h4>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: blog.descripcion }}></div>
                            <div>
                                <p>{blog.autor_name}</p>
                            </div>
                            <a href={`/Blog/${blog.slug}`} className={BlogStyle.Btn01}>
                                <button className={BlogStyle.Bton01Tex}>Read more</button>
                            </a>
                        </div>
                    </list>
                );
                })}
            </ul>
    </div>
);
};

export default Blog;
