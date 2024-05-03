import CarTransport from "./transport/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import Transport from "./transport/Transport";

declare var process;

let transport : Transport;
if (process.argv.includes("uber")){
   transport = new CarTransport();
}else if(process.argv.includes("eats")){
    transport = new MotorcycleTransport();
}
else{
    console.error("Selecione o tipo de transporte");
}

if(transport){
    transport.startTransport();
}
