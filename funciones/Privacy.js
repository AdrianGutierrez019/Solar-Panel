import {getPrivacy} from '@/funciones/getPrivacy'
import PriStyle from '@/styles/Privacy.module.css'

const PPrivacy = async () => {
    const Privacy =await getPrivacy('Privacy');
    return (
        <div >
            <div className={PriStyle.Cont2}>
                <h2 className={PriStyle.title}>Privacy Policy</h2>
                    <list className={PriStyle.flexi}>
                        <a className={PriStyle.title01} href="Home">Home</a>
                        <li className={PriStyle.Desc01}>Privacy</li>
                    </list>
            </div>
            <div className={PriStyle.Cont3}>
                    <h2 className={PriStyle.title1}>{Privacy.Title}</h2>
                    <p className={PriStyle.desc}>{Privacy.Descripcion}</p>
                <div className={PriStyle.Cont4} dangerouslySetInnerHTML={{ __html: Privacy.Info }}></div>
            </div>
        </div>
    );
};

export default PPrivacy;