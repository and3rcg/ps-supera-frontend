import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';

import ProdutoThumbnail from '../components/ProdutoThumbnail';

import api from '../api/axios';

const ThumbnailContainer = styled.div`
    display: flex;
    width: 80vw;
    margin: 10px auto;
    flex-wrap: wrap;
    align-self: space-around;
    justify-content: space-around;
    padding: 10px 30px;
`;

const OrdemContainer = styled.div`
    display: flex;
    text-align: left;
    align-items: center;
    margin-left: 20px;
`;

const BotaoOrdem = styled.button`
    background-color: rgba(0, 0, 0, 0);
    border: none;
    cursor: pointer;
    font-family: Urbanist;
    margin: 5px 16px;
`;

function HomePage() {
    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        api.get('produtos').then((res) => setListaProdutos(res.data));
    }, []);

    let ordemProdutos = (evt) => {
        let param = evt.target.value;
        api.get(`produtos/?ordem=${param}`).then((res) => setListaProdutos(res.data));
    };

    return (
        <Fragment>
            <h1>JOGOS À VENDA</h1>
            <hr />
            <OrdemContainer>
                Ordenar por:
                <BotaoOrdem onClick={ordemProdutos} value="nome">
                    Nome
                </BotaoOrdem>
                <BotaoOrdem onClick={ordemProdutos} value="preco">
                    Preço
                </BotaoOrdem>
                <BotaoOrdem onClick={ordemProdutos} value="score">
                    Popularidade
                </BotaoOrdem>
            </OrdemContainer>
            <ThumbnailContainer>
                {listaProdutos.map((produto) => (
                    <ProdutoThumbnail
                        imagem={produto.imagem}
                        nome={produto.nome}
                        preco={produto.preco}
                        slug={produto.slug}
                    />
                ))}
            </ThumbnailContainer>
        </Fragment>
    );
}

export default HomePage;
