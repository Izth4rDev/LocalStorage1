localStorage.setItem('nombre', 'Miguel'); //alamcena localmente y permanentemente

sessionStorage.setItem('nombre', 'Romina');//almacena localmente y mientras se esta navegando

//en LocalStorage, sessionStorage se almacenan datos solo como tipo string

const producto = {

    nombre: 'monitor de 24 Pulgadas',
    precio: 300
}

//Metodo JSON que pemite convertir un objeto en un string para poder almacenarlo en local storage 
const productString = JSON.stringify(producto); 
console.log(productString);
localStorage.setItem('producto', productString);

const meses = ['Enero', 'Febrero', 'Marzo'];
const meseString = JSON.stringify(meses);
localStorage.setItem('Meses',meseString);

