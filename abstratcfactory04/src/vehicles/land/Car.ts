import ILandVehice from "./Interfaces/ILandVehicle";

export default class Car implements ILandVehice{
    startRoute() {
        this.getCargo();
        console.log("Carro iniciando");
    }
    getCargo() {
        console.log("Carro passageiro embarcado");
    }

}