import { ContactConteiner } from "./styled"
<script defer src="apps.js"></script>

export default function Contact() {
    return (
        <ContactConteiner>
            <form action="https://formsubmit.co/ajax/niconicoly9718@gmail.com" method="POST" data-form>
                <label for="nome">Nome</label>
                <input type="text" name="nome" id="nome" required />
                <label for="email">Email</label>
                <input type="text" name="email" id="email" required />
                <label for="mensagem">Mensagem</label>
                <textarea name="mensagem" id="mensagem" required />
                <button type="submit"  data-button>enviar</button>
            </form>
        </ContactConteiner>
    )
}