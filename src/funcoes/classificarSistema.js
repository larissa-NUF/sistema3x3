export const classificacoes = { 
    "SPD": "Sistema Possível e Determinado", 
    "SPI": "Sistema Possível e Indeterminado", 
    "SI": "Sistema Impossível"
};

const classificar = (dets) => {
    console.log(dets)
    let diferenteZero = 0
    let zero = 0
    for (let i = 0; i <= 2; i++) {
        if (dets[i] != 0) diferenteZero++;
        else zero++;
    }

    if (dets[3] == 0 && zero == 3) return classificacoes.SPI
    else if(dets[3] == 0 && diferenteZero == 3) return classificacoes.SI
    else return classificacoes.SPD

}

export { classificar }