import IBuilder from "../builders/interface/IBulder";
import Engine from "../componentes/Engine";
import Transmission from "../componentes/Transmission";
import VehicleType from "../componentes/VehicleType";
import Wheel from "../componentes/Wheel";

 
 export default class Director{
    constructor(private builder : IBuilder){

    }

    constructSedancar(){
        this.builder.setVehicletype(VehicleType.SEDAN);
        this.builder.setSeats(5);
        this.builder.setTransmission(Transmission.AUTOMATIC);
        this.builder.setEngine(new Engine(1300));
        this.builder.addWheel(new Wheel(14));
        this.builder.addWheel(new Wheel(14));
        this.builder.addWheel(new Wheel(14));
        this.builder.addWheel(new Wheel(14));
    }

    constructorTuck(){
        this.builder.setVehicletype(VehicleType.TRUCK);
        this.builder.setSeats(3);
        this.builder.setTransmission(Transmission.AUTOMATIC);
        this.builder.setEngine(new Engine(13000));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
        this.builder.addWheel(new Wheel(20));
    }

    constructorSportcar(){
    this.builder.setVehicletype(VehicleType.SPORTCAR);
    this.builder.setSeats(4);
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.setEngine(new Engine(50000))
    this.builder.addWheel(new Wheel(20));
    this.builder.addWheel(new Wheel(20));
    this.builder.addWheel(new Wheel(20));
    this.builder.addWheel(new Wheel(20));
    }

    constructorSuv(){
        this.builder.setVehicletype(VehicleType.SUV);
        this.builder.setSeats(4);
        this.builder.setTransmission(Transmission.MANUAL);
        this.builder.setEngine(new Engine(9000))
        this.builder.addWheel(new Wheel(30));
        this.builder.addWheel(new Wheel(30));
        this.builder.addWheel(new Wheel(30));
        this.builder.addWheel(new Wheel(30));
    }
 }