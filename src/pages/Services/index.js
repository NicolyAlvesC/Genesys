import img01 from '../../assets/images/imagem 01.svg';
import img02 from '../../assets/images/imagem 02.svg';
import img03 from '../../assets/images/imagem 03.svg';
import img04 from '../../assets/images/imagem 04.svg';
import img05 from '../../assets/images/imagem 05.svg';

import { ConteinerService } from './styled';

export default function Services() {
    return (
        <ConteinerService>
            <div className="conteiner">
                <div className='boxao'>
                    <div className="box-1">
                        <div className="titulo">
                            Serviços
                        </div>
                        <div class="dropdown">
                        <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                        <div id="myDropdown" class="dropdown-content">
                            <p>sasa</p>
                         </div>
                    </div>
                    </div>
                    <div className="linha"></div>
                    <div className="box-2">
                        <div className="subtitulo">
                            Galeria
                        </div>
                        <div className='page'>
                            <div className='item header'> header</div>
                            <div className='item menu'> menu</div>
                            <div className='item main'> main</div>
                        </div>
                    </div>
                </div>
              
               
            </div>
        </ConteinerService>
    )
}
