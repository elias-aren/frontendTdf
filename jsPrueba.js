let total=0;
let productos=["leche", "yogurt", "cafe", "te", "manteca", "membrillo"];
let precio=[ 110,230,450,120,250,300];
let stock= [300,200,500,1000,200,150];
let listaDeProductos= document.getElementById("lista");
let botonIngrese= document.getElementById("ingrese");

function cargarListado(){
for( let i=0;i<precio.length;i++){
let divProducto= document.createElement("div");
divProducto.id= `productos-{i}` ;
let producto= document.createElement("p");
producto.innerHTML= productos[i];
let precios= document.createElement("p");
precios.innerHTML= precio[i];
let cantidad= document.createElement("input");
cantidad.type= "number";
divProducto.appendChild(producto);
divProducto.appendChild(precios);
divProducto.appendChild(cantidad);
listaDeProductos.appendChild(divProducto);
}
};


function comprar(){
for(i=0;i<precio.length;i++){
 let 
}
}
window.addEventListener("load", cargarListado);
window.onload= cargarListado();