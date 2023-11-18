// "Use strict"
// for (let index = 1; index < 6; index++) {
//     if (index = 3) {
//         console.log('hola')
//         continue;
//     debugger;
// }
// console.log('Termino el ciclo');




// function suma() {
//     let operacion1 =  parseFloat(document.getElementById('valor1').value);
//     let operacion2 = parseFloat(document.getElementById('valor2').value);
//     document.getElementById('resultado').innerHTML = (operacion1 + operacion2);
// }

// function resta() {
//     let operacion1 =  parseFloat(document.getElementById('valor1').value);
//     let operacion2 = parseFloat(document.getElementById('valor2').value);
//     document.getElementById('resultado').innerHTML = (operacion1 - operacion2);
// }

// function multiplicacion() {
//     let operacion1 =  parseFloat(document.getElementById('valor1').value);
//     let operacion2 = parseFloat(document.getElementById('valor2').value);
//     document.getElementById('resultado').innerHTML = (operacion1 * operacion2);
// }

// function division() {
//     let operacion1 =  parseFloat(document.getElementById('valor1').value);
//     let operacion2 = parseFloat(document.getElementById('valor2').value);
//     document.getElementById('resultado').innerHTML = (operacion1 / operacion2);
// }

// function limpiar() {
//     document.getElementById('calculadora').reset();
// }

let boton = document.querySelector('.botonRojo')

boton.addEventListener('click',function(){
    console.log('dimos click en el boton');
    boton.classList.add('verde');
});

// boton.addEventListener('mouseenter',function(){
//     console.log('Entraste al boton');
// });

// boton.addEventListener('mouseleave',function(){
//     console.log('Saliste del boton');
// });

// window.addEventListener('keydown',()=>{
//     console.log('pulso una tecla')
// })

// window.addEventListener('keyup',()=>{
//     console.log('deje de presionar una tecla')
// })

// window.addEventListener('load',()=>{
//     console.log('termine de cargar la pagina')
// })

// let span = document.querySelector("#resultado

// function texto () {
//     document.getElementById('agrega').innerHTML= ('diario')
// }







// let d= [5,6,7]
// suma(3,4, [...d]);

// let mas = a + b +[...d];

// console.log(mas);


// let hola = function(){
//     console.log('yaa');
// };

// hola();

// let arrow = (name) => console.log(name);

// arrow('Diego');

