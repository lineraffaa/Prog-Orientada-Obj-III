import Airplane from "../vehicles/aerial/Airplane";
import Car from "../vehicles/land/Car";
import ITrasnportFactory from "./ITransportFactory";

export default class UberTransport implements ITrasnportFactory{
    creatTransportVehicle() {
        return new Car();
    }
    creatTransportAircraft() {
       return new  Airplane();
    }

}