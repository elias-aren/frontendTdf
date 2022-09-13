let suma=0;
let botonSuma= document.getElementById("suma");
botonSuma.addEventListener("click", sumaDeNumeros);
let botonResta= document.getElementById("resta");
botonSuma.addEventListener("click",restaDeNumeros);


function sumaDeNumeros(){
 
  let num1= document.querySelector(".numero1").value;
  let num2= document.querySelector(".numero1").value; 
   suma = num1+num2;
}
function mostrarsuma(){

console.log("suma");
}
