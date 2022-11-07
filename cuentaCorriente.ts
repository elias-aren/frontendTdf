 import { cliente } from "./ClienteBanco";
 import { Persona } from "./persona";
 export class cuentaCorriente extends cliente{
     interes:number;
     cuenta:number;
     constructor(paramPersona:Persona,paramCuenta:number){
         super(paramPersona,paramCuenta);
         this.interes=0.015;
         this.cuenta=paramCuenta;
     }
     retirarDinero(efectivo:number):void{
         if(this.getSaldo() > efectivo){
             this.saldo=this.saldo-efectivo;
             console.log("el saldo actual es:", this.saldo);}
             else{
                 console.log("saldo insuficiente")};
             
         }
         actualizarSaldo(): void {
             this.saldo=this.saldo*this.interes;
         }
        }