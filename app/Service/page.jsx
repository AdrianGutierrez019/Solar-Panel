import Header from '@/funciones/Header'
import Footer from '@/funciones/Footer'
import Service from '@/funciones/Service'
import Features from '@/funciones/Features'
import BService from '@/funciones/BService'
import ServStyle from '@/styles/Service.module.css'

export default async function HomePage() {

	return (
    <div>
      <Header/>
      <section>
        <div className={ServStyle.Cont01}>
          <h2 className={ServStyle.title}>Our Services</h2>
            <ul className={ServStyle.flexi}>
              <a className={ServStyle.title01} href="Home">Home</a>
              <li className={ServStyle.Desc01}>Service</li>
            </ul>
        </div>
      </section>

      <section>
      |<Service/>
      </section>

      <div className={ServStyle.Cont05}>
      |<Features/>
      </div>

      <section>
      |<BService/>
      </section>


      <section>
        <div className={ServStyle.Cont06}>
            <h4 className={ServStyle.Text01}>Know more about?</h4>
            <p className={ServStyle.Text02}>To Make Requests For The Further Information</p>
            <button className={ServStyle.Btn01}><a className={ServStyle.Bton01Tex} href="Contact"> Contact Us Now</a></button>
        </div>
      </section>

      <Footer/>
		</div>
	);
}

