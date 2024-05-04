import logo from './logo.svg';
import './App.css';
import { resolverSistema } from './funcoes/calcularSistema';
import MatrizInput from './components/matriz';
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Resultado from './components/resultado';
import Referencias from './components/referencias';

const linhas = 3;
const colunas = 4;

function App() {
  const [matriz, setMatriz] = useState(Array.from({ length: linhas }, () => Array.from({ length: colunas }, () => null)));
  const [resultado, setResultado] = useState([])

  useEffect(() => {
    setResultado(resolverSistema(matriz))
  }, [matriz]);

  useEffect(() => {
    console.log(resultado)
  }, [resultado]);

  return (
    <div className="App" style={{
      minHeight: "100vh",
      backgroundColor: "#F7F7F7"
    }}>
      <Typography variant='h2' pt={10} mb={5}>Calcular sistema 3x3</Typography>
      <Box sx={{
        display: "flex", flexDirection: "row", justifyContent: "center"
      }}>
        <MatrizInput matriz={matriz} setMatriz={setMatriz} />
        <Resultado resultado={resultado} />
      </Box>

      <Typography variant='h3' mt={10} mb={5}>Referências</Typography>
      <Referencias/>
    </div>
  );
}

export default App;
