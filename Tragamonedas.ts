export class tragamonedas{
    carretel1:number[];
    carretel2:number[];
    carretel3:number[];
    carretel1Azar:number[]=[0,0,0,0,0,0,0,0,0,0]
    carretel2Azar:number[];
    carretel3Azar:number[];
    lineasDeVisualizacion:Array<number>;


    constructor(paramCarretel1:number[]){

        this.carretel1=[1,2,3,4,5,6,7,8,9,10];
        this.carretel2=[1,2,3,4,5,6,7,8,9,10];
        this.carretel3=[1,2,3,4,5,6,7,8,9,10];
        this.carretel1Azar=paramCarretel1;
        this.carretel2Azar=[0,0,0,0,0,0,0,0,0,0];
    }
    //girarCarreteles(maximo:number,minimo:number):void{
       // for(let i=0;i< this.carretel1.length;i++){
            //let azar1:number=Math.floor(Math.random()*(maximo-minimo)+minimo)
       // this.carretel1Azar.push(azar1);
       // this.carretel2Azar.push(azar1);
        //this.carretel3Azar.push(azar1);
       // }
    //}
    girarCarreteles(carretel1Azar:Array<number>):void{
        for(let i=0;i< this.carretel1.length;i++){
        let maximo:number=10;
        let minimo:number=0;
        let azar1:number=Math.floor(Math.random()*(maximo-minimo)+minimo);


            this.carretel1Azar.push(azar1)
    }
}
    girarCarretel234(carretel1:number[]):number[]{
        //for(let i=0;i<7;i++){
      
       // let carreteAux:number[]=[0,0,0,0,0,0,0,0,0,0];
    //carreteAux[0]=this.carretel1[9];
        //this.carretel2Azar[0]=this.carretel1[9];
        for( let i=0;i<9;i++){
            let carreteAux:number[]=[0,0,0,0,0,0,0,0,0,0];
            carreteAux[0]=this.carretel1[9];
            //for(let i=0;i<9;i++){

            carreteAux[i+1]=carretel1[i];
            //}
            //for(let i=0;i<9;i++){
                //carretel1[i]=carreteAux[i];
                //carreteAux[i]=0;
            
        
            return carreteAux;
        }
//return carretel1;
}
//return carretel1;
//return this.carretel2Azar; 
//}
//return carretel1;
    //}
   // return this.carretel2Azar; 



    compararCarreteles():void{
        for(let i=5;i<8;i++){
            if(this.carretel1Azar[i]==this.carretel2Azar[i]){
                let carretele1y2:number=this.carretel1Azar[i];
                if(carretele1y2==this.carretel3Azar[i]){
                console.log("felicidades, ganaste");}else{
                    console.log("segui participando");
                }
            }
        }
        
            
            
        
    }
}


let carret1:number[]=[1,2,3,4,5,6,7,8,9,10];
let tragamonedas1:tragamonedas= new tragamonedas(carret1);
console.log(tragamonedas1.girarCarretel234(carret1));

//console.log(tragamonedas1.girarCarreteles(10,0));
//console.log(tragamonedas1)