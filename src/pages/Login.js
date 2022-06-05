import { useRef, useState, useEffect, useContext, Fragment } from 'react';

import api from '../api/axios';
import AuthContext from '../context/AuthProvider';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    height: 80vh;
    width: 100%;
`;

const LoginForm = styled.form`
    border: 1px solid black;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 20px;
    height: 40%;
    padding: 60px 40px;
    width: 40%;
`;

const FormLabel = styled.label`
    align-items: center;
    margin-top: 10px;
`;

const Input = styled.input`
    align-items: center;
    border-radius: 6px;
    font-family: Urbanist;
    font-size: 20px;
    margin-top: 5px;
`;

const LoginButton = styled.button`
    justify-content: center;
    width: 50%;
    margin-top: 10px;
`;

const LOGIN_URL = 'auth/jwt/create/';

function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, senha]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await api.post(LOGIN_URL, JSON.stringify({ email, senha }), {
                withCredentials: true,
                headers: {
                    'content-type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Credentials': true,
                },
            });
            console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.access;
            setAuth({ email, senha, accessToken });
            setEmail('');
            setSenha('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Sem resposta do servidor.');
            } else if (err.response?.status === 400) {
                setErrMsg('Digite o e-mail ou a senha.');
            } else if (err.response?.status === 401) {
                setErrMsg('Usuário não autorizado.');
            } else {
                setErrMsg('Login falhou.');
            }
            errRef.current.focus();
        }
    };

    return (
        <Fragment>
            {success ? (
                <Container>
                    <h1>Seja bem-vindo(a) de volta!</h1>
                    <a href="/">Retornar à página principal</a>
                </Container>
            ) : (
                <Container>
                    <p ref={errRef} aria-live="assertive">
                        {errMsg}
                    </p>
                    <LoginForm onSubmit={handleSubmit}>
                        <FormLabel htmlFor="email">E-mail</FormLabel>
                        <Input
                            type="text"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <FormLabel htmlFor="senha">Senha</FormLabel>
                        <Input
                            type="password"
                            id="senha"
                            ref={userRef}
                            required
                            onChange={(e) => setSenha(e.target.value)}
                            value={senha}
                        />
                        <LoginButton>Login</LoginButton>
                    </LoginForm>
                    <p>
                        Ainda não tem uma conta?
                        <a href="/registro">Registre-se</a>
                    </p>
                </Container>
            )}
        </Fragment>
    );
}

export default Login;
