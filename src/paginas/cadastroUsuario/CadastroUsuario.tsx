import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from 'react-router-dom'
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import './CadastroUsuario.css';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function CadastroUsuario() {

    let navigate = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmarSenha == user.senha) {
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuario cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            } catch (error) {
                console.log(error)
                toast.error("Erro ao cadastrar o Usuário! O Usuário já existe!", {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });
            }

        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validarEmail = emailRegex.test(user.usuario);

    const checaNome = user.nome.length > 0 && user.nome.length < 3
    const checaUsuario = !validarEmail && user.usuario.length > 0
    const checaSenha = user.senha.length > 0 && user.senha.length < 8
    const checaConfirmarSenha = confirmarSenha !== user.senha
    const checaVazio = user.nome.length === 0 || user.usuario.length === 0 ||
        user.senha.length === 0 || confirmarSenha.length === 0

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='nome'
                            label='nome'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            fullWidth />
                        <TextField
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='usuario'
                            label='e-mail'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth />
                        <TextField
                            value={user.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='foto'
                            label='foto'
                            variant='outlined'
                            name='foto'
                            margin='normal'
                            type='normal'
                            fullWidth />
                        <TextField value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha'
                            label='senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            fullWidth />
                        <TextField value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha'
                            label='confirmarSenha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none' >
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'
                                disabled={checaNome || checaUsuario || checaSenha ||
                                    checaConfirmarSenha || checaVazio ? true : false}>
                                Cadastar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;