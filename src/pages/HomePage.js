import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';

import ProdutoThumbnail from '../components/ProdutoThumbnail';

import api from '../utils/api';

const ThumbnailContainer = styled.div`
    display: flex;
    width: 80vw;
    margin: 10px auto;
    flex-wrap: wrap;
    align-self: space-around;
    justify-content: space-around;
    padding: 10px 30px;
`;

function HomePage() {
    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        api.get('produtos').then((res) => setListaProdutos(res.data));
    }, []);

    return (
        <Fragment>
            <h1>JOGOS À VENDA</h1>
            <hr />
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
