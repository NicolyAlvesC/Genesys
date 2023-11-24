import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

import { ContactConteiner } from './styled';
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
                    Sobre Mim
                </div>
                <div className="descricao">
                    Lorem ipsum dolor sit amet consectetur. Faucibus sit massa at viverra malesuada risus aliquam felis. Turpis a aliquet tincidunt amet ut tortor. Leo odio nisl malesuada faucibus a viverra elementum pharetra quis. Sed pellentesque amet velit iaculis lacus nisl dolor. Dictum iaculis eget sed tellus. Gravida integer ultricies et nisi etiam risus fames est diam. Arcu.
                </div>
            </div> 
            <Linha/>
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
                        onChange={(e) => setMessage(e.target.value)}>
                    </textarea>
                    <button type="submit">Enviar</button>
                </form> 
            </div>
        </div>

       
    </ContactConteiner>
  )
}