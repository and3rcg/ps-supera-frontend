import React, { useState, useEffect, Fragment } from 'react';
import api from '../utils/api';
import { filtroReais } from '../utils/filters';

function HomePage() {
    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        api.get('produtos').then((res) => setListaProdutos(res.data));
    }, []);
    // console.log(listaProdutos);

    return (
        <Fragment>
            {listaProdutos.map((produto) => (
                <Fragment>
                    <h1>{produto.nome}</h1>
                    <p>{filtroReais(produto.preco)}</p>
                    <img src={produto.imagem} alt={produto.slug} />
                </Fragment>
            ))}
        </Fragment>
    );
}

export default HomePage;
