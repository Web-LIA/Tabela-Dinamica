import grafico from '../../assets/home/graficos.gif'
import { TopicosProps } from '../../types/typesHome'

function Sobre({style}:TopicosProps){
    return (
        <div className={style}>
            <img src={grafico} alt="Imagem de um gráfico" />
            <div>
                <h2>Sobre<br></br>Tabela dinâmica:</h2>
                <p>A Tabela dinâmica é uma ferramenta poderosa para calcular, resumir e analisar os dados que lhe permitem ver comparações, padrões e tendências nos dados. Por isso, desenvolvemos uma versão online para ajudar a maioria dos usuários que pretendem analisar e armazenar na núvem seus dados. Crie tabelas dinâmicas com apenas um <a href="/tabela"><span>CLICK!</span></a></p>
            </div>
        </div>
    )
}
export default Sobre