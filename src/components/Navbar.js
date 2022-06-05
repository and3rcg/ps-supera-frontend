import React from 'react';
import styled from 'styled-components';

// Material UI imports
import Badge from '@mui/material/Badge';
import Search from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const Container = styled.div`
    height: 60px;
    background-color: #ff7b00;
    position: sticky;
    top: 0;
    width: 100%;
    font-size: 16px;
`;

const Wrapper = styled.div`
    align-items: center;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 13px 1.5rem;
`;

const Left = styled.div`
    font-weight: bold;
    flex: 1;
`;

const Logo = styled.a`
    text-decoration: none;
    color: white;
    font-size: 28px;
`;

const NavbarLink = styled.a`
    text-decoration: none;
    color: white;
`;

const Center = styled.div`
    font-weight: 400;
    flex: 2;
    display: flex;
    text-align: center;
`;

const SearchBarContainer = styled.div`
    align-items: center;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 9px;
    color: black;
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 5px;
    margin-left: 25px;
`;

const Input = styled.input`
    border: none;
    border-radius: 4px;
    margin-right: 10px;
    font-family: Urbanist;
    width: 100%;
    &:focus {
        outline: none;
    }
`;

const Right = styled.div`
    display: flex;
    font-weight: 400;
    flex: 1;
    justify-content: space-evenly;
    margin-left: 15px;
`;

const MenuItem = styled.div`
    cursor: pointer;
`;

// verificar se o usuário está autenticado e criar authLinks/guestLinks

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo href="/">Supera Games</Logo>
                </Left>
                <Center>
                    <SearchBarContainer>
                        <Input />
                        <Search />
                    </SearchBarContainer>
                </Center>
                <Right>
                    <MenuItem>
                        <NavbarLink href="/login">Login</NavbarLink>
                    </MenuItem>
                    <MenuItem>
                        <NavbarLink href="/registro">Registrar</NavbarLink>
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCart />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}
