import ILandVehice from "./Interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehice{
    startRoute() {
        console.log("Moto inciando");
    }
    getCargo() {
        console.log("Moto passageiro embarcado");
    }

}