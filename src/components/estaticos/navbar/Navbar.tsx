import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';

import { useDispatch } from "react-redux";
import { addToken } from '../../../store/token/Actions';
import { Box } from '@mui/material';
import { toast } from 'react-toastify'
import { UserState } from '../../../store/token/Reducer';

function Navbar() {

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    function goLogout() {
        dispatch(addToken(''));
        toast.info("Usuário deslogado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token !== '') {
        navbarComponent =
            <AppBar position="static" style={{ background: "#8A2908" }}>
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/postagens" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/postagensportitulo" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens por título
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/perfil" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Perfil
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>

                    </Box>

                </Toolbar>
            </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;