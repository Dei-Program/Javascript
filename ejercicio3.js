var osoInicial=5;
var osoLimite=10000;
var crecCadaMes=4;
var meses=12;
var i=0;
function ositos(){
while(i<meses){

    if(osoInicial>osoLimite){
        console.log('-->Existen '+osoInicial+ ' osos, sobrepasa los 10000')
        console.log('Removiendo '+(osoInicial/2)+' osos de anteojos de la poblacion');
        osoInicial=osoInicial/2;
    }
    else{
        i++;
        console.log('Van a existir '+osoInicial+' osos de anteojos despúes del mes '+i);
        osoInicial=osoInicial*crecCadaMes;
    }


}}

ositos();