import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehice from "../vehicles/land/Interfaces/ILandVehicle";

export default interface ITrasnportFactory{
    creatTransportVehicle() : ILandVehice;
    creatTransportAircraft() : IAircraft;
}