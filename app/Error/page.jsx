import {directus} from '@/lib/directus';
import { readItems } from '@directus/sdk';
import ErrorPage from '@/styles/Error.module.css'

export function getError() {
  return directus.request(readItems('error'));
}

export default async function HomeError() {
  const Error =await getError('error');

	return (
    <div className={ErrorPage.Cont01}>
        <h2 className={ErrorPage.Text02}>{Error.title}</h2>
        <p className={ErrorPage.Text03}>{Error.descripcion}</p>
        <p><button className={ErrorPage.Btn01}>
          <a className={ErrorPage.Text01} href="Home">{Error.gohome} </a></button>
        or
        <button className={ErrorPage.Btn01}>
          <a className={ErrorPage.Text01} href="Contact"> {Error.contactus}</a></button></p>
        <img src={`${directus.url}assets/${Error.ilust}?width=600`} alt="" />
    </div>
	);
}

