
let Compra=0;
let productos=["cafe","te","leche","capuccino"];
let stock=[300,160,450, 340];
let precio=[50,200,150,370];

let listaDeProductos= document.getElementById("lista");

function cargarLista(){
    for(let i=0; i<precio.length; i++){
let producto= document.createElement("li");
producto.innerHTML= productos[i];
let precio= document.createElement("li");
precio.innerHTML= precio[i];

listaDeProductos.appendChild(producto);
listaDeProductos.appendChild(precio);
listaDeProductos.appendChild(cantidad);

    }
}