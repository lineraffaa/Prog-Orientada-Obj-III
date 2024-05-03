import Company from "./Transport/Company";
import ITrasnportFactory from "./Transport/ITransportFactory";
import NineNineTransport from "./Transport/NineNineTransport";
import UberTransport from "./Transport/UberTranport";
import Client from "./clients/Client";


const currentCompany = Company.UBER;
let factory : ITrasnportFactory;


switch (currentCompany) {
    case Company.UBER:
        factory = new UberTransport();
        
        break;
    case Company.NINENINE:
        factory = new NineNineTransport();
        break;
    
        default:
   
        console.log("Companinha não definida!");
}

const client = new Client(factory);
client.startRoute();

