"use strict";

let Compra=0;
let productos=["cafe","te","leche","capuccino"];
let stock=[300,160,450, 340];
let precio=[50,200,150,370];



function cargarLista(){
    for(let i=0; i<precio.length; i++){
let listaDeProductos= document.getElementById("lista").value;
let producto= document.createElement("p");
producto.innerHTML= productos[i];
let precio2= document.createElement("p").value;
precio2.innerHTML= precio[i];

listaDeProductos.appendChild(producto);
listaDeProductos.appendChild(precio2);
listaDeProductos.appendChild(cantidad);

    }
};