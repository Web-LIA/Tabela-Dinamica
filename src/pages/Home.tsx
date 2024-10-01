import css from '../components/themes/home.module.css'

import Capa from '../components/home/Capa'


function Home(){
    let enderecoAssets:String = "../assets/"
    return (
            <div className={css.Home}>
                <Capa    />
                
            </div>
    )
}
export default Home