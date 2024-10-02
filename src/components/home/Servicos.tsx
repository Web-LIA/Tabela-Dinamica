import css from '../themes/home.module.css'

import Topicos from './TopicosServico'

import somaImage from '../../assets/home/Adicao.png'
import editImage from '../../assets/home/Edit.png'
import deleteImage from '../../assets/home/Delete.png'

function Servicos(){
    return(
        <div className={css.topicos + ' ' + css.servicos}>
            <h2>Serviços Oferecidos</h2>
            <ul>
                <Topicos imagem = {somaImage} titulo='Adicione Elementos' texto = 'Com poucos cliques, você consegue adicionar e armazenar seus dados na núvem!' />
                <Topicos imagem = {editImage} titulo='Edite sua Tabela' texto = 'Acesse suas tabelas já armazenadas e as modifique como quiser!' />
                <Topicos imagem = {deleteImage} titulo='Delete seus dados' texto = "Caso não precise mais das suas informações armazenadas, você pode remover seus dados!" />
                
            </ul>
        </div>
    )

}

export default Servicos;