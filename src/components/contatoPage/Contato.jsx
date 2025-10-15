import './contato.css'
import { useState } from "react";
import emailjs from '@emailjs/browser'

export default function Contato() {
    const [dadosForm, setDadosForm] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setDadosForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    function enviarMensagem(e) {
        e.preventDefault();


        if (!dadosForm.nome || !dadosForm.email || !dadosForm.mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        emailjs
            .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, dadosForm, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCESSO!');
                    alert('Sua mensagem foi enviada com sucesso!');
                    setDadosForm({
                        nome: '',
                        email: '',
                        mensagem: '',
                    });
                },
                (error) => {
                    console.log('ERRO: ', error.text);
                    alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
                },
            );
    }
    return (
        < section id="contatoSection" className="container-fluid" >
            <form
                onSubmit={enviarMensagem}
                className="text-center"
            >
                <h2 id="tituloContato">Vamos trocar ideias?</h2>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    onChange={handleChange}
                    className="entrada col-8 col-md-8 col-lg-6 w-60 d-block mx-auto mb-3"
                    autoComplete="name"
                />
                <input
                    type="email"
                    name="email"
                    pattern=".*@.*\.com"
                    placeholder="Email"
                    onChange={handleChange}
                    className="entrada col-8 col-md-8 col-lg-6 w-60 d-block mx-auto mb-3"
                    autoComplete="email"
                />
                <input
                    name="mensagem"
                    placeholder="Mensagem"
                    rows="10"
                    onChange={handleChange}
                    className="entrada col-8 col-md-8 col-lg-6 w-60 d-block mx-auto mb-3"
                    autoComplete="off"
                />
                <button
                    type="submit"
                    className="botao text-center d-block mx-auto mb-3"
                >
                    Enviar
                </button>
            </form>
        </section >
    )
}