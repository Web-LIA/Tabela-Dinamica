import styles from '../components/themes/home.module.css'

import Capa from '../components/home/Capa'
import Sobre from '../components/home/Sobre'
import Servicos from '../components/home/Servicos'

function Home(){
    
    return (
            <div className = {styles.Home}>
                <Capa style = {styles.capa + ' ' + styles.topicos}   />
                <Sobre style = {styles.sobre + ' ' + styles.topicos}  />
                <Servicos style = {styles.servicos + ' ' + styles.topicos} />
            </div>
    )
}
export default Home