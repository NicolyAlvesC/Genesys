import { ConteinerService } from './styled';
import Linha  from '../../components/linha/index';

import imagem01 from '../../assets/images/imagem 01.jpg'
import imagem02 from '../../assets/images/imagem 02.jpg'
import imagem03 from '../../assets/images/imagem 03.jpg'
import imagem04 from '../../assets/images/imagem 04.jpg'
import imagem05 from '../../assets/images/imagem 05.jpg'
import imagem06 from '../../assets/images/imagem 06.jpg'
import imagem08 from '../../assets/images/imagem 08.png'
import setinha from '../../assets/images/seta.svg'

export default function Services() {

    return (
      
        <ConteinerService>
            <div className="conteiner">
                <div className='boxao'>
                    <div className="box-1">
                        <div className="titulo">
                            Serviços
                        </div>
                       
                        <div className="servicos">
                            <div className='manutencao'>
                                <div className='titulo-1'>
                                <img src={setinha} alt='seta' className='seta'/>Manutenção
                                </div>
                                <div className='descricao-1'>
                                   Esse serviço consiste em formatação de máquina (Desktops e/ou Notebooks), configuração e a possibilidade de realizar uma análise de peças para possíveis trocas.
                                </div>
                            </div>
                            <div className='orcamentos'>
                                <div className='titulo-2'>
                                <img src={setinha} alt='seta' className='seta'/>Orçamentos
                                </div>
                                <div className='descricao-2'>
                                Esse serviço consiste em uma conversa com o cliente para orçar a montagem de uma máquina. 
                                </div>
                            </div>
                        </div>
                    </div>
                    <Linha />
                    <div className="box-2">
                        <div className="titulo">
                            Galeria
                        </div>
                        <div className='fotos'>
                        <div className='header-1'>
                                <img src={imagem04} alt='dave-2' className='maior'/>
                                <img src={imagem03} alt='dave-1' className='maior-lado'/>
                            </div> 
                             <div className='header-2'>
                                <img src={imagem05} alt='bre-2' className='maior-baixo-lado'/>
                                <img src={imagem06} alt='bre-1' className='maior-baixo'/>
                            </div>  
                            <div className='header-3'>
                                <img src={imagem08} alt='bre-3' className='menor-lado-lado'/>
                                <img src={imagem01} alt='gab-1' className='menor'/>
                                <img src={imagem02} alt='gab-2' className='menor-lado'/>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </ConteinerService>
    )
}
