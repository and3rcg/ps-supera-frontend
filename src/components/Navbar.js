import React from 'react';
import styled from 'styled-components';

import Search from '@mui/icons-material/Search';

const Container = styled.div`
    height: 60px;
    background-color: black;
    color: white;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    padding: 10px 20px;
    background-color: black;
    color: white;
    flex: 1;
`;

const Center = styled.div`
    padding: 10px 20px;
    background-color: black;
    color: white;
    flex: 1;
`;

const Right = styled.div`
    padding: 10px 20px;
    background-color: black;
    color: white;
    flex: 3;
`;

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>Left</Left>
                <Center>Center</Center>
                <Right>
                    <Search />
                </Right>
            </Wrapper>
        </Container>
    );
}
