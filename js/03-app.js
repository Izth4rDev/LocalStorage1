/*/////////////////////////////////////////////
//Eliminar y Actualizar datos de localStorage//
/////////////////////////////////////////////*/

//Eliminar un registro de localStorage
localStorage.removeItem('nombre');

//Actualizar un registro de localStorage
const mesesArray = JSON.parse(localStorage.getItem('Meses'));
console.log(mesesArray);
mesesArray.push('nuevo mes');
console.log(mesesArray);
localStorage.setItem('Meses', JSON.stringify(mesesArray));

//Limpiar el localStorage

localStorage.clear();