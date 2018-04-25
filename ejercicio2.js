var gen62 = 62;
var gen124 = 124;
var sumTotal = 0;
var cont = 0;

function todos() {
    console.log('TODOS LOS GENERADORES :')
    console.log('-->4 GENERADORES DE 64 MW');
    while (cont < 4) {
        sumTotal = sumTotal + gen62;
        console.log('Generador #' + (cont + 1) + ' está prendido, añadiendo ' + gen62 + ' MW para un total de ' + sumTotal + ' MW.');
        cont++;
    }
    sumTotal = 0;
    console.log('--> 15 GENERADORES DE 124 MW');
    for (var j = 0; j < 15; j++) {
        sumTotal = sumTotal + gen124;
        console.log('Generador #' + (j + 1) + ' está prendido, añadiendo ' + gen124 + ' MW para un total de ' + sumTotal + ' MW.');
    }
}
function pares(){
    sumTotal = 0;
    cont = 1;
    console.log('GENERADORES PARES:')
    console.log('-->4 GENERADORES DE 64 MW');
    while (cont <= 4) {
        cont = cont + 2;
        sumTotal = sumTotal + gen62;
        console.log('Generador #' + (cont - 2) + ' está apagado.');
        console.log('Generador #' + (cont - 1) + ' está prendido, añadiendo ' + gen62 + ' MW para un total de ' + sumTotal + ' MW.');

    }

    sumTotal = 0;
    console.log('-->15 GENERADORES DE 124 MW');
    for (var j = 0; j < 15; j = j + 2) {
        sumTotal = sumTotal + gen124;
        console.log('Generador #' + (j + 1) + ' está apagado.');
        console.log('Generador #' + (j + 2) + ' está prendido, añadiendo ' + gen124 + ' MW para un total de ' + sumTotal + ' MW.');

    }}

function impares() {
    sumTotal = 0;
    cont = 0;
    console.log('GENERADORES IMPARES:')
    console.log('-->4 GENERADORES DE 64 MW');
    while (cont < 4) {
        cont = cont + 2;
        sumTotal = sumTotal + gen62;
        console.log('Generador #' + (cont - 1) + ' está prendido, añadiendo ' + gen62 + ' MW para un total de ' + sumTotal + ' MW.');
        console.log('Generador #' + cont + ' está apagado.');
    }

    sumTotal = 0;
    console.log('-->15 GENERADORES DE 124 MW');
    for (var j = 0; j < 15; j = j + 2) {
        sumTotal = sumTotal + gen124;
        console.log('Generador #' + (j + 1) + ' está prendido, añadiendo ' + gen124 + ' MW para un total de ' + sumTotal + ' MW.');
        console.log('Generador #' + (j + 2) + ' está apagado.');
    }
}


todos();
pares();
impares();