import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" style={{ background: "#8A2908" }}>
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Olá! Eu Sou a Beatriz Seraphim e vou falar um pouco sobre mim. Bom, Sou natural de São Paulo, tenho 21 anos, sou encantada pela vida e por tudo que ela pode nos proporcionar. Criei esse Blog para que possamos juntos ensinar, aprender e dar dicas de coisas que realmente nos fazem bem! Aqui falaremos sobre cabelos e lugares. Espero que todos se sintam bem e confortáveis em estarem aqui comigo. Obrigada! Se quiserem me conhecer mais é só clicar nos links abaixo! ♥</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
