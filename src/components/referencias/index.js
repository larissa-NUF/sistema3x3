import { Accordion, AccordionDetails, AccordionSummary, Box, Link } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Referencias = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box width={600}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Como funciona o site?
                    </AccordionSummary>
                    <AccordionDetails>
                        Digite os valores de cada parte do sistema nas respectivas caixas de texto. <br/>
                        Não há necessidade de clicar em nenhum botão para gerar o resultado, eles são calculados a cada mudança realizada nas caixas de texto.<br/>
                        Caso não seja digitado nenhum valor será reconhecido como 0.
                    </AccordionDetails>

                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Links
                    </AccordionSummary>
                    <AccordionDetails>
                        <Link target="_blank" href="https://brasilescola.uol.com.br/matematica/regra-cramer.htm">Formula para calcular sistema 3x3</Link><br />
                        <Link target="_blank" href="https://www.todamateria.com.br/sistemas-lineares/">Como classificar</Link><br />
                        <Link target="_blank" href="https://www.somatematica.com.br/emedio/sistemas/sistemas4.php">Matrizes de teste</Link>
                    </AccordionDetails>

                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Raciocínio
                    </AccordionSummary>

                    <AccordionDetails>
                        <Link target="_blank" href="/raciocinio.jpeg">Imagem</Link>
                    </AccordionDetails>
                </Accordion>
            </Box>

        </Box>
    )
}

export default Referencias;