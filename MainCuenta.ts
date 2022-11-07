import { cliente } from "./ClienteBanco";
import { cuentaCorriente } from "./cuentaCorriente";
import { cuentaAhorro } from "./cuentaAhorro";
import { Persona } from "./persona";
let Julian:Persona= new Persona("Julian","Rodriguez",26543345,"09/02/76");
let Pepe:Persona=new Persona("Pepe","Cibrian",15980987,"01/09/54");
let cuentaCorrientePepito:cuentaCorriente=new cuentaCorriente(Pepe,15);
cuentaCorrientePepito.setSaldo(1000);

cuentaCorrientePepito.ingresarDinero(2000);
cuentaCorrientePepito.retirarDinero(900);
cuentaCorrientePepito.actualizarSaldo();
