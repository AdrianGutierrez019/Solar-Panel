import React from "react";
import {directus} from "@/lib/directus";
import { getBlog } from '@/funciones/getBlog';
import BlogStyle from '@/styles/Blog.module.css'

const Blog = async () => {
    const blog =await getBlog('blog');
return (
    <div >
            <ul className={BlogStyle.Cont02}>
                {blog.map((blog) => {
                return (
                    <ul className={BlogStyle.Cont03} key={blog.id}>
                        <div className={BlogStyle.Cont05}>
                            <img className={BlogStyle.ImgIl} src={`${directus.url}assets/${blog.ilus}?width=350`} alt="blog" />
                            <span className={BlogStyle.Date01}>{blog.date}</span>
                        </div>
                        <div className={BlogStyle.Cont04}>
                            <div>
                                <h4>{blog.title}</h4>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: blog.descripcion }}></div>
                            <div>
                                <p>{blog.autor.name}</p>
                            </div>
                        <button className={BlogStyle.Btn01}> <a href={`/Blog/${blog.slug}`}
                        className={BlogStyle.Bton01Tex} >Read more</a></button>
                        </div>
                    </ul>
                );
                })}
            </ul>
    </div>
);
};

export default Blog;
