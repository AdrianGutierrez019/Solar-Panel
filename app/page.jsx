import Header from '@/funciones/Header'
import Footer from '@/funciones/Footer'
import Team from '@/funciones/Team'
import History from '@/funciones/History'
import Eco from '@/funciones/Eco'
import Shop from '@/funciones/Shop'
import Portafolio from '@/funciones/Portafolio'
import Aliados from '@/funciones/Aliados'
import Features from '@/funciones/Features'
import BService from '@/funciones/BService'
import Comment from '@/funciones/Comment'
import Blog from '@/funciones/Blog'
import Video from '@/funciones/Video'
import styles from '@/styles/index.module.css';
import { gethead } from '@/funciones/gethead';
import SliderHome from '@/funciones/HomeSliders'

export default async function HomePage() {
  const head =await gethead('head');
	return (
    <div>
      <Header/>
          <section>
        <div className={styles.container}>
            <div >
              <div className={styles.container3} >
                  <div >
                  <h2 className={styles.title}>{head.Title01}</h2>
                  <p className={styles.Subtitle}>{head.SubTitle01}</p>
                  <div >
                      <div className={styles.par}>
                      <div  className={styles.par} dangerouslySetInnerHTML={{ __html: head.desc01 }}></div>
                      <button className={styles.btn}> Learn more</button>
                      </div>
            </div>
              </div>
            </div>
        </div>
        </div>
    <div>
<SliderHome/>
    </div>

    <div className={styles.container2}>
    <Shop/>
    </div>

    <div className={styles.container2}>
      <History/>
    </div>

    <div className={styles.container}>
      <Portafolio/>
    </div>

    <div className={styles.container2}>
      <Aliados/>
    </div>

    <div className={styles.container2}>
      <Eco/>
    </div>

    <div className={styles.container}>
      <Features/>
    </div>

    <div className={styles.container2}>
      <BService/>
    </div>

    <div className={styles.container2}>
        <div >
        <Video/>
    </div>
      </div>
      <Footer/>
    </section>
    </div>
	);
}

