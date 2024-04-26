import Header from '@/funciones/Header'
import Footer from '@/funciones/Footer'
import Blog from '@/funciones/PageBlog'
import BlogStyle from '@/styles/PageBlog.module.css'

export default async function HomePage() {

	return (
    <div>
      <Header/>
      <section>
        <div className={BlogStyle.Cont01}>
          <h2 className={BlogStyle.title}>Blog</h2>
            <ul className={BlogStyle.flexi}>
              <a className={BlogStyle.title01} href="Home">Home</a>
              <li className={BlogStyle.Desc01}>Blog</li>
            </ul>
        </div>
      </section>

      <Blog/>

      <Footer/>
		</div>
	);
}

