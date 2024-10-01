import css from '../components/themes/home.module.css'

import Capa from '../components/home/Capa'
import Sobre from '../components/home/Sobre'
import Servicos from '../components/home/Servicos'

function Home(){
    
    return (
            <div className={css.Home}>
                <Capa    />
                <Sobre   />
                <Servicos />
            </div>
    )
}
export default Home