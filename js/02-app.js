/*//////////////////////////////
//Obtner datos de localStorage//
//////////////////////////////*/

const nombrem = localStorage.getItem('nombre');
console.log(nombrem);

const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON)); //hace conversion de string al tipo de dato original

const mesesJSON = localStorage.getItem('Meses');
mesesA = JSON.parse(mesesJSON);
console.log(mesesA);
