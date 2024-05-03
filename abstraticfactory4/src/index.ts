import client from "./client/client";
import aiquefomedivery from "./delivery/aiquefomedelivery";
import ifooddelivery from "./delivery/ifooddelivery";
import ideliveryfactory from "./delivery/interfaces/ideliveryfactory";

declare var process 
let factory : ideliveryfactory

if(process.argv.includes("ifood")){
    factory = new ifooddelivery()
}else if(process.argv.includes("aiqfome")){
    factory = new aiquefomedivery()
}else{
    console.log("Tente novamente!")
}
const Client = new client(factory);
Client.startDelivery();


