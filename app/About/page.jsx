import Header from '@/funciones/Header'
import Footer from '@/funciones/Footer'
import Eco from '@/funciones/Eco'
import BService from '@/funciones/BService'
import History from '@/funciones/History'
import Aliados from '@/funciones/Aliados'
import Video from '@/funciones/Video'
import styles from '@/styles/index.module.css';

export default async function HomePage() {

	return (
    <div>

          <Header/>
            <div className={styles.Cont01}>
                <h2 className={styles.title02}>About Solar Light</h2>
                <ul className={styles.flexi}>
                  <a className={styles.title03} href="Home"> Home </a>
                  <li className={styles.Desc03} >About</li>
                </ul>
            </div>

      <History/>

      <Eco/>

      <Aliados/>

      <BService/>

      <Video/>

      <Footer/>
		</div>
	);
}

