import Transport from "./Transport";
import Motorcycle from "./veiculos/Motorcycle";
import IVehicle from "./veiculos/interface/IVehicle";


export default class MotorcycleTransport extends Transport{
   
    protected createTransport(): IVehicle{
        return new Motorcycle();
    }

}