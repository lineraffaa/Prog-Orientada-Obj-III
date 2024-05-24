import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft{
   
    startRoute(): void{

        this.checkWind();
        this.getCargo(); 
        console.log("Avião Iniciando a Decolagem") 
    }

    getCargo(): void {
        console.log("Avião: Passageiros");
    }
    checkWind() {
        console.log("Avião em voo");
    }
}