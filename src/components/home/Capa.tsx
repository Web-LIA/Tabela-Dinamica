import css from '../themes/home.module.css'

function Capa(){
    return(
        <div className={css.capa}>
            <div>
                <h1>Tabela Dinâmica</h1>
                <h2>Visualize seus projetos de forma dinâmica</h2>
            </div>
                <img src="https://cdn-icons-png.flaticon.com/512/4675/4675642.png" alt="Imagem de uma tabela" />
        </div>
    )
}

export default Capa