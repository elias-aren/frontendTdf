import { Seleccion } from "./seleccionDeFutbol";
import { Entrenador } from "./entrenador";
import { Futbolista } from "./futbolista";
import { Persona } from "./persona";
let seleccionadoDeFutbol= new Seleccion;
let datosDefutbolista1= new Persona("facundo","Alvarez",332345,"01/09/89");
let futbolista1= new Futbolista(datosDefutbolista1,"defensor","lanus");
seleccionadoDeFutbol.convocarFutbolista(futbolista1);
console.log(seleccionadoDeFutbol.toString());
