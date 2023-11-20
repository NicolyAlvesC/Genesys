import { ConteinerService } from './styled';
import imagem01 from '../../assets/images/imagem 01.jpg'
import imagem02 from '../../assets/images/imagem 02.jpg'
import imagem03 from '../../assets/images/imagem 03.jpg'
import imagem04 from '../../assets/images/imagem 04.jpg'
import imagem05 from '../../assets/images/imagem 05.jpg'

export default function Services() {
    return (
        <ConteinerService>
            <div className="conteiner">
                <div className='boxao'>
                    <div className="box-1">
                        <div className="titulo">
                            Serviços
                        </div>
                    </div>
                    <div className="linha"></div>
                    <div className="box-2">
                        <div className="subtitulo">
                            Galeria
                        </div>
                        {/* <div className='fotos'>
                            <div className='header'>
                                <img src={imagem04} alt='' className='maior'/>
                                <img src={imagem03} alt='' className='maior-baixo'/>
                            </div>
                            <div className='aside-1'>
                                <img src={imagem02} alt='' className='maior-lado'/>
                                <img src={imagem01} alt='' className='maior-baixo-lado'/>
                            </div>
                            <div className='headerInversa'>
                                <img src={imagem05} alt='' className='menor-maior'/>
                            </div>
                        </div> */}
                    </div>
                    
                </div>
            </div>
        </ConteinerService>
    )
}
