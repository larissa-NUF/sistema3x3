import { classificar } from "./classificarSistema"

const resolverSistema = (matrizResultado) => {
    let xyzMatriz = gerarMatrizes(matrizResultado)
    let xyzDet = []
    xyzMatriz.map( m => xyzDet.push(calcularDeterminantes3x3(m)))

    let matrizDet = calcularDeterminantes3x3(matrizResultado)

    let xyz = [];
    xyzDet.map( d => xyz.push(d/matrizDet))

    let classificacao = classificar([...xyzDet, matrizDet])
    return {xyz, classificacao}
}

const gerarMatrizes = (matrizResultado) => {
    let matrizDet = []
    const r = 3

    for (let lr = 0; lr <= 2; lr++) {
        let matriz = []

        for (let i = 0; i <= 2; i++) {
            let m = [];
    
            for (let y = 0; y <= 2; y++) {
                m.push(matrizResultado[i][y == lr ? r : y])
            }
            
            matriz.push(m)
            
        }
        matrizDet.push(matriz)
    }
    
    return matrizDet

}

const calcularDeterminantes3x3 = (matriz) => {
    return calcularDiagonal(matriz, true) - calcularDiagonal(matriz, false);
}

const calcularDiagonal = (matriz, diagonalP) => {
    let diagonal = 0;
    let y = 0;

    for (let index = 0; index < 3; index++) {
        let d = 0;
        y = loopPosicao(index)
        for (let i = 0; i <= 2; i++) {

            let valor = matriz[i][y]

            if (diagonalP) y++;
            else y--;

            y = loopPosicao(y)
            if (i == 0) d = valor
            else d *= valor

        }

        if (index == 0) diagonal = d
        else diagonal += d
    }
    return diagonal
}

const loopPosicao = (p) => {
    switch (p) {
        case 3:
            p = 0
            break;
        case -1:
            p = 2
            break;
    }
    return p
}

export { resolverSistema }