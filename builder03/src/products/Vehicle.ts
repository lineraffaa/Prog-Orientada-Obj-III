import Engine from "../componentes/Engine";
import Transmission from "../componentes/Transmission";
import VehicleType from "../componentes/VehicleType";
import Wheel from "../componentes/Wheel";

export default class Vehicle {
  
  
  
    private _vehicleType: VehicleType;

 

  private _transmission: Transmission;

  private _seats: number;
  private _engine: Engine; 
   

  private _wheels: Wheel[] = [];

  public get vehicleType(): VehicleType {
    return this._vehicleType;
  }
  public set vehicleType(value: VehicleType) {
    this._vehicleType = value;
  }

  public get transmission(): Transmission {
    return this._transmission;
  }
  public set transmission(value: Transmission) {
    this._transmission = value;
  }

  public get VehicleType(): VehicleType {
    return this._vehicleType;
  }
  public set VehicleType(value: VehicleType) {
    this._vehicleType = value;
  }

  public get Tansmission(): Transmission {
    return this._transmission;
  }
  public set Tansmission(value: Transmission) {
    this._transmission = value;
  }

  public get seats(): number {
    return this._seats;
  }
  public set seats(value: number) {
    this._seats = value;
  }
  public get engine(): Engine {
    return this._engine;
}
public set engine(value: Engine) {
    this._engine = value;
}

  

  public addWheel(wheel: Wheel) {
    this.wheels.push(wheel);
  }

  public get wheels(): Wheel[] {
    return this._wheels;
  }
  public set wheels(value: Wheel[]) {
    this._wheels = value;
  }
}
