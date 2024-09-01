import { FacebookRounded, GitHub, LinkedIn, YouTube } from '@mui/icons-material';
import React from 'react';
import styled from "styled-components";
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    z-index: 10;
    position: relative;
`;
const FooterWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    padding: 1rem;
    color: ${({ theme }) => theme.text_primary};
`;
const Logo = styled.div`
    font-weight: 600;
    font-size: 20px;
    cursor: default;
    color: ${({ theme }) => theme.primary};
`;
const Nav = styled.ul`
    width: 100%;
    max-width: 800px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;

    @media (max-width: 768px){
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        text-align: center;
        font-size: 12px;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2rem;
    transition: color 0.2s ease-in-out;
    &:hover{
        color: ${({ theme }) => theme.primary};
    }

    @media (max-width: 768px){
        font-size: 1rem
    }
`;
const SocialMediaIcons = styled.div`
    display: flex;
    margin-top: 1rem;

    @media (max-width: 385px){
        margin-bottom: 25px;
    }
`;

const SocialMediaIcon = styled.a`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.2s ease-in-out;
    &:hover{
        color: ${({ theme }) => theme.primary};
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Guilherme Rodrigues</Logo>
                <Nav>
                    <NavLink href="#About">Sobre</NavLink>
                    <NavLink href="#Skills">Skills</NavLink>
                    <NavLink href="#Experience">Experiência</NavLink>
                    <NavLink href="#Projects">Projetos</NavLink>
                    <NavLink href="#Education">Formação</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.github} target="display" rel="noopener noreferrer">
                        <GitHub />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.youtube} target="display" rel="noopener noreferrer">
                        <YouTube />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.linkedin} target="display" rel="noopener noreferrer">
                        <LinkedIn />
                    </SocialMediaIcon>
                </SocialMediaIcons>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;