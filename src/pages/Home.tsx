import styles from '../components/themes/home.module.scss'

import Capa from '../components/home/Capa'
import Sobre from '../components/home/Sobre'
import Servicos from '../components/home/Servicos'

function Home(){
    function topicoStyle(style:string){
        return style + ' ' + styles.topicos;
    }
    return (
            <div className = {styles.Home}>
                <Capa style = {topicoStyle(styles.capa)}   />
                <Sobre style = {topicoStyle(styles.sobre)}  />
                <Servicos style = {topicoStyle(styles.servicos)} />
            </div>
    )
}
export default Home