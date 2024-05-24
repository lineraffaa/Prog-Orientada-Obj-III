import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void{

        this.checkWind();
        this.getCargo(); 
        console.log("Helicopter Iniciando a Decolagem") 
    }

    getCargo(): void {
        console.log("Helicopter: Passageiros");
    }
    checkWind() {
        console.log("Helicopter em voo");
    }
    
}