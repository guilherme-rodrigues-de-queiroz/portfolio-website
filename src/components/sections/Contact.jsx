import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;

    @media (max-width: 960px){
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 768px){
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ContactForm = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ContactTitle = styled.div`
    font-size: 28px;
    margin-bottom: 6px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + 50};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;

    &:focus{
        border: 1px solid ${({ theme }) => theme.primary};
    }
`;

const ContactInputMessage = styled.textarea`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + 50};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus{
        border: 1px solid ${({ theme }) => theme.primary};
    }
`;

const ContactButton = styled.button`
    width: 100%;
    text-decoration: none;
    text-align: center;
    background: hsla(271, 100%, 50%, 1);
    padding: 13px 16px;
    margin-top: 2px;
    border-radius: 12px;
    border: none;
    color: ${({ theme }) => theme.text_primary};
    font-size: 18px;
    font-weight: 600;
`;

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        assunto: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_g1hn8ed',
            'template_83cr42r',
            {
                from_name: form.name,
                to_name: 'Guilherme Rodrigues',
                from_email: form.email,
                to_email: 'guilhermedequeiroz2014@gmail.com',
                message: form.message,
                subject: form.assunto,
            },
            'njhey4uOGdqZKgn7U'
        )
            .then((result) => {
                setLoading(false);
                alert('Obrigado. Responderei assim que possível.');

                setForm({
                    name: '',
                    email: '',
                    assunto: '',
                    message: '',
                })
            }, (error) => {
                setLoading(false)

                console.log(error);

                alert('Algo está errado.');
            })
    }

    return (
        <Container id="Contact">
            <Wrapper>
                <Title>Contato</Title>
                <Desc
                    style={{
                        marginBottom: "40px",
                    }}
                >
                    Entre em contato diretamente pelo e-mail.
                </Desc>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <ContactForm>
                        <ContactTitle>Contate-me 🚀</ContactTitle>
                        <ContactInput placeholder="Nome" type="text" name="name" onChange={handleChange} value={form.name} autoComplete="on" required />
                        <ContactInput placeholder="E-mail" type="email" name="email" onChange={handleChange} value={form.email} autoComplete="on" required />
                        <ContactInput placeholder="Assunto" type="text" name="assunto" onChange={handleChange} value={form.assunto} autoComplete="off" required />
                        <ContactInputMessage placeholder="Mensagem" name="message" rows={7} onChange={handleChange} value={form.message} autoComplete="off" required />
                        <ContactButton type="submit">{loading ? 'Enviando...' : 'Enviar'}</ContactButton>
                    </ContactForm>
                </form>
            </Wrapper>
        </Container>
    );
};

export default Contact;