import { Box, Typography } from "@mui/material";
import { classificacoes } from "../../funcoes/classificarSistema";

const Resultado = ({resultado}) => {

    const verificarValor = (index) => {
        if (resultado.classificacao == classificacoes.SI) return "Incalculável"
        else if(resultado?.xyz?.length == 3 && !isNaN(resultado?.xyz[index])) return resultado.xyz[index]
        else return "Não calculado"
    }
    return (
        <Box mt={1} ml={5} textAlign="left">
            
            {["x", "y", "z"].map((letra, index) => {
                return(
                    <Typography mb={1}><bold>Valor de {letra}:</bold> {verificarValor(index)}</Typography>
                )
            })}
            <Typography mt={5}><bold>Classificação:</bold> {resultado.classificacao}</Typography>
        </Box>
    )
}
export default Resultado;