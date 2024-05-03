import ITransportFactory from "../Transport/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehice from "../vehicles/land/Interfaces/ILandVehicle";



export default class client{
   
    private vehicle: ILandVehice;
    private aircraft: IAircraft; 

    constructor(factory:ITransportFactory){
        this.vehicle = factory.creatTransportVehicle();
        this.aircraft = factory.creatTransportAircraft();
    }
    
    startRoute() : void{
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }

    
}