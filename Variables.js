console.log('hola mundo');
var nombre = 'dAVID cÓNDOR';
var edad = 28;
var peso = 305.1;
var casado = false;
var fechaNacimiento = new Date();
var noExisto = null;
var noEstoyDefinido = undefined;
var numero = -1;
var numero1 = 0;
var numero2 = 1;
if (numero2) {
    console.log('Verdadero');


} else {
    console.log('FALSO');

}
//Jason
var usuario = {
    "nombre": "davoid", //clave-->nombre
    apellido: "Eguez",
    cedula:"17133434",
    edad:28,


};//OBJETOS

console.log(usuario.nombre);//acceder alos objetos, propietades que tienen las clases
console.log(usuario);
// se puede elimindar cada propiedad con
delete  usuario.edad;
console.log(usuario);
usuario.fechaNacimiento=new Date();
console.log(usuario);
//crear cosas a un mismo nivel
usuario.mascotas={}//se puede crear solamente 1 nivel
usuario.mascotas.nombre="ADRIAN";
console.log(usuario);
var arreglo =[1,"arreglo",3,true,null];
//solo hay un tipo de arreglo, y se peude poner diferentes tipos de datos ya que en jvscript no existen los tipos de datos
console.log(arreglo);
function sumarNumeros(numeroUno,numeroDos) {
    return numeroUno+numeroDos;

}
console.log(sumarNumeros(1,2));
console.log(sumarNumeros(1,2.2333))

var potenciaDeDosDeUnNumero= function noesnecesarionombre(numero) {

}

var potenciaDeDosNumeroDos =function (numero) {

}
console.log(potenciaDeDosDeUnNumero(2,34,34,34))