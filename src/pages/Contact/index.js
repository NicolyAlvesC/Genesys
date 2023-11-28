import React, { useState } from 'react'
import { ContactConteiner } from './styled';
import emailjs from '@emailjs/browser';
import image11 from '../../assets/images/Vector.png'

import Linha from '../../components/linha';


export default function Contact() {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_y0fz9kj';
    const templateId = 'template_larusmi';
    const publicKey = 'VYDKZdgOtB7_8W6mQ';

  
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'GenesysTD',
      message: message,
    };


    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <ContactConteiner>
        <div className="box">
          <div className="box-1">
            <div className="titulo">
                Sobre a Genesys
            </div>
            <div className="descricao">
                Foi idealizada pelo Vitor que têm dedicado seu tempo à busca constante de conhecimento.
                Graduado em Ciências da Computação e que atualmente reside em São Paulo.
                <br/> O objetivo da Genesys é alcançar o público que precisa de ajuda para montar seu primeiro setup, ou até mesmo de melhorar o atual.
            </div>
          </div> 
          <div className='linha'><Linha/></div> 
           <hr className='awa'></hr>
            <div className="box-2">
                <div className='titulo-2'>Contatos</div>
                 <form onSubmit={handleSubmit} className='emailForm'>
                    <input className='nome'
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input className='email'
                        type="email"
                        placeholder="Email para contato"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea className='texto'
                        cols="30"
                        rows="10"
                        value={message}
                        placeholder='Com o que podemos ajudar?'
                        onChange={(e) => setMessage(e.target.value)}>
                    </textarea>
                    <button type="submit">Enviar</button>
                </form> 
                
            </div>
        </div>
        <div className='linkedin'>
                            <a href="https://www.linkedin.com/in/nicoly-alves/"><p>Site: Nicoly Alves</p></a>
                            <img src={image11} alt="linked"/>
                            <a href="https://www.linkedin.com/in/vitor-sena-b71aba187/"><p>Owner: Vitor Sena</p></a>
                        </div>
       
    </ContactConteiner>
  )
}