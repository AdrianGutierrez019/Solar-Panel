
import {directus} from '@/lib/directus';
import { readItem } from '@directus/sdk';
import { notFound } from 'next/navigation';
import Headers from '@/funciones/ChildHeader'
import Footer from '@/funciones/ChildFooter'
import BlogStyle from '@/styles/Blog.module.css'


async function getPost(slug) {
	try {
		const post = await directus.request(
			readItem('blog', slug, {
				fields: ['*', { image: ['filename_disk'], autor: ['name'] }],
			})
		);

		return post;
	} catch (error) {
		notFound();
	}
}

export default async function DynamicPage({ params }) {
	const blog = await getPost(params.slug);
	return (
        <div>
        	<Headers/>

			<div className={BlogStyle.Cont06}>
				<h2>{blog.title}</h2>
				<p>
					{blog.date} &bull; {blog.autor.name}
				</p>
        	</div>
				<div className={BlogStyle.Contenido01} dangerouslySetInnerHTML={{ __html: blog.descripcion01 }}></div>
			<div className={BlogStyle.ImageCB}>
				<img  src={`${directus.url}assets/${blog.ilus}?width=400`} alt="blog" />
			</div>
			<Footer/>
        </div>
	);
};
