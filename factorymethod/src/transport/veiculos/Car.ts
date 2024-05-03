import IVehicle from "./interface/IVehicle";

export default class Car implements IVehicle{

    startRoute(): void {
        this.getCargo();
        console.log("Carro saindo para entrega")
    }
    getCargo(): void {
        console.log("Carro Chegando")
    }
    
    
    

    


    

}