import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { filtroReais } from '../utils/filters';

const CardProduto = styled.div`
    align-items: top;
    border: 1px solid lightgray;
    border-radius: 9px;
    display: flex;
    padding: 10px;
    width: 25%;
`;

const ImagemJogo = styled.img`
    float: left;
    max-width: 100%;
    height: auto;
`;

const DadosJogo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;
`;

const NomeJogo = styled(Link)`
    white-space: pre-line;
    color: black;
    text-decoration: none;
    font-size: 20px;
    font-weight: bolder;
`;

const PrecoJogo = styled.a`
    color: #ff7b00;
    font-size: 24px;
    font-weight: bold;
`;

export default function ProdutoThumbnail(props) {
    return (
        <Fragment>
            <CardProduto>
                <Link to={`/${props.slug}`}>
                    <ImagemJogo src={props.imagem} alt="" />
                </Link>
                <DadosJogo>
                    <NomeJogo to={`/${props.slug}`}>{props.nome}</NomeJogo>
                    <PrecoJogo>{filtroReais(props.preco)}</PrecoJogo>
                </DadosJogo>
            </CardProduto>
        </Fragment>
    );
}
