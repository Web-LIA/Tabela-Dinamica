import imagemCapa from '../../assets/home/tabelaCapa.png'
interface capaProps{
    style:string
}

function Capa({style}:capaProps){
    return(
        <div className={style}>
            <div>
                <h1>Tabela Dinâmica</h1>
                <h2>Visualize seus projetos de forma dinâmica</h2>
            </div>
                <img src= {imagemCapa}  alt="Imagem de uma tabela" />
        </div>
    )
}

export default Capa