import css from '../themes/home.module.css'


interface TopicosProp{
    imagem:string;
    titulo:string;
    texto:string;
}

function TopicoServico({imagem, titulo, texto}:TopicosProp){

    return(
        <li>
            <h3>{titulo}</h3>
            <img src={imagem} alt={imagem.split('../../assets/home/')[0]} />
            <p>{texto}</p>            
        </li>
    )

}

export default TopicoServico;