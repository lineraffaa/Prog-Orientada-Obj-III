import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehice from "../vehicles/land/Interfaces/ILandVehicle";
import Motorcycle from "../vehicles/land/Motorcycle";
import ITransportFactory from "./ITransportFactory";

export default class NineNineTransport implements ITransportFactory{
    creatTransportVehicle(): ILandVehice {
        return new Motorcycle();
    }
    creatTransportAircraft(): IAircraft {
        return new Helicopter();
    }

}