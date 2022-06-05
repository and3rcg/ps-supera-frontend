import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import ShoppingCart from '@mui/icons-material/ShoppingCart';

import api from '../utils/api';
import { filtroReais } from '../utils/filters';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 10px auto;
    width: 60vw;
`;

const ImagemJogo = styled.img`
    height: 100%;
`;

const ContainerDadosJogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`;

const TituloJogo = styled.h1`
    flex: 3;
    color: #ff7b00;
`;

const WrapperQuantidade = styled.div`
    display: flex;
    vertical-align: middle;
    align-items: center;
`;

const InputQuantidade = styled.input`
    border-radius: 4px;
    font-family: Urbanist;
    height: 80%;
    font-size: 20px;
    font-weight: 400;
    margin-left: 10px;
    width: 5vw;
    &:focus {
        outline: none;
    }
`;

const WrapperCarrinho = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Botao = styled.button`
    background-color: #ff7b00;
    border: none;
    border-radius: 9px;
    color: white;
    cursor: pointer;
    font-family: Urbanist;
    font-size: 20px;
    height: 70%;
    margin-left: 20px;
    padding: 10px 15px;
`;

function Produto() {
    let [dadosJogo, setDadosJogo] = useState({});
    let [quantidade, setQuantidade] = useState(1);
    let { slug } = useParams();

    const mudarQuantidade = (event) => setQuantidade(event.target.value);

    useEffect(() => {
        // pegar o produto da API, filtrado pelo slug
        api.get(`produtos/?slug=${slug}`).then((res) => setDadosJogo(res.data[0]));
    }, [slug]);

    return (
        <Fragment>
            <Container>
                <ImagemJogo src={dadosJogo.imagem} alt={dadosJogo.slug} />
                <ContainerDadosJogo>
                    <TituloJogo>{dadosJogo.nome}</TituloJogo>
                    <WrapperQuantidade>
                        <label for="quantidade">Quantidade: </label>
                        <InputQuantidade
                            type="number"
                            id="quantidade"
                            onChange={mudarQuantidade}
                            value={quantidade}
                            max={dadosJogo.estoque}
                        />
                    </WrapperQuantidade>
                    <p>({dadosJogo.estoque} restantes)</p>
                    <WrapperCarrinho>
                        <h2>{filtroReais(dadosJogo.preco)}</h2>
                        <Botao>
                            <ShoppingCart />
                            Adicionar ao carrinho
                        </Botao>
                    </WrapperCarrinho>
                </ContainerDadosJogo>
            </Container>
        </Fragment>
    );
}

export default Produto;
