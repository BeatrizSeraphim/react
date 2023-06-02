import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'
import { UserState } from '../../../store/token/Reducer';
import { useSelector } from 'react-redux';

function Footer() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    var footerComponent

    if (token !== "") {
        footerComponent =


            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/BeatrizSeraphim" target="_blank">
                                <GithubIcon className='redes' />
                            </a>
                            <a href="https://www.instagram.com/beaseraphim/" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/beatriz-seraphim/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >Beatriz Seraphim © 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className='textos' align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>


    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;