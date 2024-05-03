import Transport from "./Transport";
import Car from "./veiculos/Car";

import IVehicle from "./veiculos/interface/IVehicle";

export default class CarTransport extends Transport{
            protected createTransport(): IVehicle {
               return new Car();
            }
          
        
}
