import { Container } from "./styles"
import Seta from "../../components/seta"

export default function Home() {
    return (
        <Container>
            <div className="box">
                <div className="titulo">
                    Genesys
                </div>
                <div className="subtitulo">
                    Technology Development
                </div>
            </div>
             <Seta/>
        </Container>
    )
}