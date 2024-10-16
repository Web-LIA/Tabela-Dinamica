import { ServicosProps } from "../../types/typesHome";

function TopicoServico({imagem, titulo, texto}:ServicosProps){

    return(
        <li>
            <h3>{titulo}</h3>
            <img src={imagem} alt={imagem.split('../../assets/home/')[0]} />
            <p>{texto}</p>            
        </li>
    )

}

export default TopicoServico;