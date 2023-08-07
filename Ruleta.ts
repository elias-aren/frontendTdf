export class ruleta{

    private rojo:number[];
    private negro:number[];
    private par:number[];
    private impar:number[];
    private docena:number[];
    private segundaDocena:number[];
    private terceraDocena:number[];
    private cero: number;
    private apuesta:string;
    constructor(paramApuesta:string){
        this.rojo=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
        this.negro=[2,4,6,8,10,11,13,15,17,20,24,26,28,29,31,33,35];
        this.docena=[2,4,6,8,10,12];
        this.segundaDocena=[14,16,18,20,22,24];
        this.terceraDocena=[26,28,30,32,34,36];
        this.apuesta=paramApuesta;
    }
    setRojo():void{
        
    }
    
    


 public generarAleatorios(minimo: number,maximo: number):number{
     let numeroAleatorio:number= Math.floor(Math.random()*(maximo-minimo)+minimo);
     return numeroAleatorio
}
public buscarCoincidenciaRojo(numero:number):boolean{
    let coincidencia:boolean=false;
for(let i=0;i<this.rojo.length;i++){
    if(numero===this.rojo[i])
    coincidencia=true;
}
return coincidencia;
}

}
 



let apuesta:string="apuestaRojo";
let juego1:ruleta= new ruleta(apuesta);
let aleatorio:number=juego1.generarAleatorios(0,36);
console.log(aleatorio);
console.log(juego1.buscarCoincidenciaRojo(aleatorio));

