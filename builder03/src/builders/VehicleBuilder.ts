import Engine from "../componentes/Engine";
import Transmission from "../componentes/Transmission";
import VehicleType from "../componentes/VehicleType";
import Wheel from "../componentes/Wheel";
import Vehicle from "../products/Vehicle";
import IBuilder from "./interface/IBulder";

export default class VehicleBuilder implements IBuilder{
    private _vehicle = new Vehicle();
    reset(): void {
        this._vehicle = new Vehicle();
    }
    getVehicle(): Vehicle {
        const result : Vehicle = this._vehicle;
        this.reset();
        return result;
    }
    addWheel(wheel: Wheel) {
        this._vehicle.addWheel(wheel);
    }
    setVehicletype(value: VehicleType) {
        this._vehicle.vehicleType = value;
    }
    setSeats(seats: number) {
        this._vehicle.seats = seats;
    }
    setEngine(engine: Engine) {
        this._vehicle.engine = engine;
    }
    setTransmission(transmission: Transmission) {
        this._vehicle.transmission = transmission;
    }
    
    

   
 
    
   
   
}