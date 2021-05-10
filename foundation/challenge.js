function crescent(nInicial, nMax, salto = 1) {
    let result = [];
    for (nInicial; nInicial <= nMax; nInicial += salto) {
        result.push(nInicial);
    }
    console.log(result);
}

function decrescent(nInicial, nMax, salto = -1) {
    let result = [];
    if (nMax < 0 && salto > 0) {
        salto = salto * -1;
        nMax = nMax * -1;
        for (nInicial; nMax > result.length; nInicial += salto) {
            result.push(nInicial);
        }
    } else {
        for (nInicial; nInicial >= nMax; nInicial += salto) {
            result.push(nInicial);
        }
    }
    console.log(result);
}

function range(nInicial = 1, nMax = 0, salto) {
    if (nInicial !== 1 && nMax === 0) {
        nMax = nInicial;
        nInicial = 1;
        crescent(nInicial, nMax, salto);
    } else if (nInicial > nMax) {
        if (salto === undefined) {
            salto = -1;
        }
        decrescent(nInicial, nMax, salto);
    } else {
        crescent(nInicial, nMax, salto);
    }
}

range(5);
range(6, 11);
range(10, 19, 2);
range(6, 2);
range(8, -3, 4);
