import { directus } from '@/lib/directus'
import { gethead } from '@/funciones/gethead';
import { getIcon } from '@/funciones/getIcon';
import Header from '@/funciones/Header'
import Footer from '@/funciones/Footer'
import Formulario from '@/funciones/Formulario'
import ContStyle from '@/styles/Contact.module.css'
import MapComponent from '@/funciones/maps';

export default async function HomePage() {

  const head =await gethead('head');
  const icon =await getIcon('Icon');



	return (
    <>
      <Header/>

      <div className={ContStyle.Cont01}>
        <h2 className={ContStyle.title}>Contact Us</h2>
          <ul className={ContStyle.flexi}>
            <a className={ContStyle.title01} href="Home">Home</a>
            <li className={ContStyle.Desc01}>Contact</li>
          </ul>
      </div>

      <div className={ContStyle.Cont02}>
        <h2 className={ContStyle.title02}>Feel Free to Contact Us Now</h2>
        <p className={ContStyle.Desc02}> Submit your queries here and we will get
        back to you as soon as possible.</p>
        <Formulario />
      </div>

      <div className={ContStyle.Cont05}>
        <div>
          <h4 className={ContStyle.title03}>We Are Here <span >For
              You</span></h4>
          <p className={ContStyle.Desc03}>We’d love to hear about it.
              Take five minutes to fill out our project form so that we can get to know you and
              understand your project.</p>
        </div>
        <div className={ContStyle.Cont03}>
          <div className={ContStyle.Cont04}>
              <img className={ContStyle.ImgA} src={`${directus.url}assets/${icon.Write}?width=50`} alt="write" />
                <div className={ContStyle.Cont06}>
                  <h4 >Write to us</h4>
                  <p>{head.email}</p>
                </div>
          </div>
          <div className={ContStyle.Cont04}>
              <img className={ContStyle.ImgA} src={`${directus.url}assets/${icon.Customer}?width=50`} alt="icon" />
                <div className={ContStyle.Cont06}>
                  <h4>Customer Care</h4>
                  <p>{head.numero}</p>
                </div>
          </div>
          <div className={ContStyle.Cont04}>
                <img className={ContStyle.ImgA} src={`${directus.url}assets/${icon.Office}?width=50`} alt="icon" />
                  <div className={ContStyle.Cont06}>
                    <h4>Office Hours</h4>
                    <p>{head.Hours}</p>
                  </div>
          </div>
        </div>
      </div>
      <div className={ContStyle.Cont07}>
      <MapComponent />
      </div>
      <Footer/>
		</>
	);
}

