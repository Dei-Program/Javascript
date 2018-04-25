var arreglo = ['pera', 'manzana',1,2,3,4,'juan','perro','man','DAVID','EPN',123,1998,2018]

var cont = 0;



function validadNumeroDeStringsEnArreglo(arreglo) {
    for (var j = 0; j < arreglo.length; j++) {

            if ((typeof arreglo[j]) == 'string') {
                cont = cont + 1;
            }

    }
    return console.log('EN ESTE ARRAY HAY ' + cont + ' STRINGS');
}
validadNumeroDeStringsEnArreglo(arreglo);