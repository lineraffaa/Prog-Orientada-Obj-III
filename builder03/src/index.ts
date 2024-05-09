import VehicleBuilder from "./builders/VehicleBuilder";
import Transmission from "./componentes/Transmission";
import Director from "./director/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

director.constructSedancar();
const sedan : Vehicle = builder.getVehicle();
console.log("Criando Veiculo");
console.log("Tipo" +sedan.VehicleType);
console.log("Potencia " +sedan.engine.power);
switch (sedan.transmission) {
    case Transmission.MANUAL:
        console.log("MANUAL");
        break;
    case Transmission.AUTOMATIC:
        console.log("AUTOMATIC");
        break;
    case Transmission.AUTOMATIC_SEQUENTIAL:
        console.log("AUTOMATIC_SEQUENTIAL");
        break;
    default:
        break;
}
console.log("Assentos " +sedan.seats)
console.log("Rodas:" +sedan.wheels.length + "-Aro" + sedan.wheels[0].rim);

director.constructorTuck();
const truck : Vehicle = builder.getVehicle();
console.log("Criando Veiculo"); 
console.log("Tipo" +truck.VehicleType);
console.log("Potencia " +truck.engine.power);
switch (sedan.transmission) {
    case Transmission.MANUAL:
        console.log("MANUAL");
        break;
    case Transmission.AUTOMATIC:
        console.log("AUTOMATIC");
        break;
    case Transmission.AUTOMATIC_SEQUENTIAL:
        console.log("AUTOMATIC_SEQUENTIAL");
        break;
    default:
        break;
}
console.log("Assentos " +truck.seats);
console.log("Rodas " +truck.wheels.length + "- Aro" +truck.wheels[0].rim)

director.constructorSportcar();
const sportcar : Vehicle = builder.getVehicle();
console.log("Criando Veiculo");
console.log("Tipo " +sportcar.VehicleType);
console.log("Potencia " +sportcar.engine.power);
switch (sedan.transmission) {
    case Transmission.MANUAL:
        console.log("MANUAL");
        break;
    case Transmission.AUTOMATIC:
        console.log("AUTOMATIC");
        break;
    case Transmission.AUTOMATIC_SEQUENTIAL:
        console.log("AUTOMATIC_SEQUENTIAL");
        break;
    default:
        break;
}
console.log("Assentos " +sportcar.seats);
console.log("Rodas " +sportcar.wheels.length + " Aro" +sportcar.wheels[0].rim);

director.constructorSuv();
const suv: Vehicle = builder.getVehicle();
console.log("Criando Veiculo");
console.log("Tipo " +suv.VehicleType);
console.log("Potencia " +suv.engine.power);
switch (suv.transmission) {
    case Transmission.MANUAL:
        console.log("MANUAL");
        break;
    case Transmission.AUTOMATIC:
        console.log("AUTOMATIC");
        break;
    case Transmission.AUTOMATIC_SEQUENTIAL:
        console.log("AUTOMATIC_SEQUENTIAL");
        break;
    default:
        break;
}
console.log("Assentos " +suv.seats);
console.log("Rodas " +suv.wheels.length + " Aro" +suv.wheels[0].rim);
