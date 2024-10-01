import css from '../components/themes/home.module.css'

import Capa from '../components/home/Capa'
import Sobre from '../components/home/Sobre'

function Home(){
    let enderecoAssets:String = "../assets/"
    return (
            <div className={css.Home}>
                <Capa    />
                <Sobre  />
            </div>
    )
}
export default Home