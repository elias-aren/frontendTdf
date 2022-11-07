import { cliente } from "./ClienteBanco";
import { Persona } from "./persona";
export class cuentaAhorro extends cliente{
    persona:Persona;
    interesVariable:number;
    saldoMinimo:number;
    constructor(paramPersona:Persona,ParamCuenta:number){
        super(paramPersona,ParamCuenta);
        this.persona=paramPersona;

    }
    setSaldoMinimo(paramSaldoMinimo:number){
        this.saldoMinimo=paramSaldoMinimo;
    }
    getSaldoMinimo():number{
        return this.saldoMinimo;
    }
    setInteres(paramInteres:number){
        this.interesVariable=paramInteres;
    }
    getInteres():number{
        return this.interesVariable;
    }
    actualizarSaldo(): void {
        this.saldo = this.saldo * this.interesVariable;
    }
    retirarDinero(efectivo: number): void {
        console.log("cuanto dinero desea retirar");
        let auxiliar:number=0;
        auxiliar=this.saldo-this.saldoMinimo;
        if(auxiliar > efectivo){
            this.saldoMinimo=this.saldoMinimo -efectivo;
            console.log("usted retiro" + efectivo);
        }else{
            console.log("retirar dinero en cajero automatico");
        }
    }
    }
   




