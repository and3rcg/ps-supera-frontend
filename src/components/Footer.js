import React from 'react';
import styled from 'styled-components';

// Material UI imports
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';

const Container = styled.div`
    display: flex;
    background-color: lightgray;
    margin-top: 90px;
    width: 100%;
`;

const Left = styled.div`
    display: flex;
    flex: 1;
    padding: 20px;
    flex-direction: column;
`;

const Descricao = styled.div``;

const ContainerSocial = styled.div`
    display: flex;
    padding: 10px;
`;

const IconeSocial = styled.a`
    text-decoration: none;
    width: 50px;
    height: 50px;
    color: black;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
    text-align: center;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
`;

function Footer() {
    return (
        <Container>
            <Left>
                Supera Games, 2022
                <Descricao>
                    Somos uma loja fictícia de games. <br />
                    Website programado por Anderson Caminha.
                </Descricao>
            </Left>
            <Center>
                <ContainerSocial>
                    <IconeSocial href="https://github.com/and3rcg">
                        <GitHub />
                    </IconeSocial>
                    <IconeSocial href="https://www.linkedin.com/in/anderson-cg/">
                        <LinkedIn />
                    </IconeSocial>
                    <IconeSocial href="https://www.instagram.com/">
                        <Instagram />
                    </IconeSocial>
                </ContainerSocial>
            </Center>
            <Right>
                <Descricao>
                    E-mail: suporte@superagames.com
                    <br />
                    Telefone: (99) 91234-5678
                    <br />
                    Rua Fictícia 292, CEP: 99999-888 São Paulo, SP
                </Descricao>
            </Right>
        </Container>
    );
}

export default Footer;
