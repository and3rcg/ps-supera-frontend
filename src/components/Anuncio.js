import { Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    background-color: #0059ff;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    height: 30px;
    justify-content: center;
    position: sticky;
    top: 0;
    width: 100%;
`;

const Wrapper = styled.div`
    padding: 5px 20px;
`;

export default function Anuncio() {
    return (
        <Fragment>
            <Container>
                <Wrapper>
                    Promoção por tempo limitado: Frete grátis para todo o Brasil em compras a partir
                    de R$ 250,00!
                </Wrapper>
            </Container>
        </Fragment>
    );
}
