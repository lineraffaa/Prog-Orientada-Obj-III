import Token from "../../util/Token";
import ICorreio from "../correios/interface/ICorreio";
import Transportadora from "../transporte/Transportadora";

export default class TransportadoraAdapter implements ICorreio{
    constructor(private transportadora: Transportadora){}
    
    authToken(): Token {
      return new Token();
   }
    sendCorreio() : void {
        this.transportadora.send();
    }
    receiveCorreio() : void{
      this.transportadora.receive();
    }
    
    
 
    
   


   
}