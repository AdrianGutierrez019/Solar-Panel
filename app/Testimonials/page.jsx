import Header from '@/funciones/Header'
import Footer from '@/funciones/Footer'
import PageComment from '@/funciones/PageComment'
import CommStyle from '@/styles/PageComment.module.css';

export default async function TestimonialPage() {


	return (
    <div>
      <Header/>
      <section>
        <div>
          <div className={CommStyle.Conta2}>
            <h2 className={CommStyle.title001}>Our Client Speaks</h2>
            <ul className={CommStyle.Fley}>
              <a className={CommStyle.title01} href="Home">Home</a>
              <li className={CommStyle.Desc01}>Testimonials</li>
            </ul>
          </div>
            <div>
            <PageComment/>
            </div>
        </div>
      </section>
      <Footer/>
		</div>
	);
}

