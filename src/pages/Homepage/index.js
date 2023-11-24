import { Container } from "./styles"
// import Seta from "../../components/seta"
import { Linhahorizonal } from "../../components/linha horizontal/styled"

export default function Home() {
    return (
        <Container>
            	<div class="stars" ></div>

             <div className="box">
                <div className="titulo">
                    Genesys
                </div>
                <div className="subtitulo">
                    <p>Technology Development<span>|</span></p>
                </div>
            </div> 
             {/* <Seta/> */}
            <Linhahorizonal/>
            
             
        </Container>
    )
}