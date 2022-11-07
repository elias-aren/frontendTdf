import { Persona } from "./persona";

 export abstract class cliente{
     cliente:Persona;
     cuenta:number;
     saldo:number

     constructor(paramCliente:Persona,paramCuenta:number){
         this.cliente=paramCliente;
         this.cuenta=paramCuenta;
         this.saldo=0;
     }


     getCliente():Persona{
         return this.cliente;
     }
     getCuenta():number{
         return this.cuenta;
     }
     getSaldo():number{
         return this.saldo;
     }
     setCliente(paramCliente:Persona):void{
         this.cliente=paramCliente;
     }
     setCuenta(paramCuenta:number):void{
         this.cuenta=paramCuenta;
     }
     setSaldo(paramSaldo:number):void{
         this.saldo=paramSaldo;
     }
     ingresarDinero(paramDinero:number):void{
         this.cuenta= paramDinero;
         this.saldo=this.saldo+paramDinero;
     }
     abstract retirarDinero(efectivo:number):void;
     abstract actualizarSaldo():void;
     
 }