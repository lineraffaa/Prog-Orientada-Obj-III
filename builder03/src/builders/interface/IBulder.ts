import Engine from "../../componentes/Engine";
import Transmission from "../../componentes/Transmission";
import VehicleType from "../../componentes/VehicleType";
import Wheel from "../../componentes/Wheel";
import Vehicle from "../../products/Vehicle";

export default interface IBuilder{
   
    reset(): void;
    getVehicle(): Vehicle;
    addWheel(wheel: Wheel);
    setVehicletype(value: VehicleType);
    setSeats(seats: number);
    setEngine(engine: Engine);
    setTransmission( transmission : Transmission);
}