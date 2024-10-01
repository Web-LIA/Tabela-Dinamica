import css from '../themes/home.module.css'

import imagemCapa from '../../assets/home/tabelaCapa.png'


function Capa(){
    return(
        <div className={css.capa}>
            <div>
                <h1>Tabela Dinâmica</h1>
                <h2>Visualize seus projetos de forma dinâmica</h2>
            </div>
                <img src= {imagemCapa}  alt="Imagem de uma tabela" />
        </div>
    )
}

export default Capa