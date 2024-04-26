
import {directus} from '@/lib/directus';
import { readItem } from '@directus/sdk';
import { notFound } from 'next/navigation';
import Headers from '@/funciones/ChildHeader'
import Footer from '@/funciones/ChildFooter'
import BlogStyle from '@/styles/PPortafolio.module.css'

async function getPost(slug) {
	try {
		const post = await directus.request(
			readItem('project', slug, {
				fields: ['*', { image: ['filename_disk'], autor: ['name'] }],
			})
		);

		return post;
	} catch (error) {
		notFound();
	}
}

export default async function DynamicPage({ params }) {
	const project = await getPost(params.slug);
	return (
        <div>
        <Headers/>
		<div className={BlogStyle.Cont02}>
			<div className={BlogStyle.ContA1}>
				<h1>{project.Title}</h1>
				<img className={BlogStyle.ImgIl} src={`${directus.url}assets/${project.ilus}?width=350`} alt="project" />
			</div>
		<div dangerouslySetInnerHTML={{ __html: project.descripcion }}></div>
		</div>
		<Footer/>
        </div>
	);
};
