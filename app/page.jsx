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

export default async function HomePage() {

	return (
    <div>
      <Header/>
          <section>
        <div className={styles.container}>
            <div >
              <div className={styles.container3} >
                  <div >
                  <h2 className={styles.title}>Solar Light for LifeLong</h2>
                  <p className={styles.Subtitle}>Trusted Products Solution</p>
                  <div >
                      <div className={styles.par}>
                      <p className={styles.par}>With our product, partner with a team that has the experience and<br/>
                          drive to help you become a market leader.</p>
                      <button className={styles.btn}> Learn more</button>
                      </div>
            </div>
              </div>
            </div>
        </div>
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

    <div className={styles.container}>
      <Comment/>
    </div>

    <div className={styles.cont}>
      <div >
          <p className={styles.text01}>Best Team</p>
          <h2 className={styles.text02}>Our Professional Team</h2>
      </div>
      <div >
        <Team/>
      </div>
    </div>

    <div className={styles.container}>
      <Blog/>
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

