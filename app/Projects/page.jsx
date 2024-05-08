import Header from '@/funciones/Header'
import Footer from '@/funciones/Footer'
import Portafolio from '@/funciones/PPortafolio'
import ProStyle from '@/styles/PPortafolio.module.css'

export default async function ProyectPage() {

	return (
    <div>
      <Header/>
      <section>
          <div className={ProStyle.Cont01}>
            <h2 className={ProStyle.title02}>Our Projects</h2>
            <list className={ProStyle.flexi}>
              <a className={ProStyle.title01} href="Home">Home</a>
              <li className={ProStyle.Desc01} >Projects</li>
            </list>
        </div>
        <div>
          <Portafolio/>
        </div>
      </section>
      <Footer/>
		</div>
	);
}

