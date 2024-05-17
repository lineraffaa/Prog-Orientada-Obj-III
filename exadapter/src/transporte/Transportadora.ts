import Token from "../../util/Token";
import ITransportadora from "./interface/ITransportadora";

export default class Transportadora implements ITransportadora{
       private token : Token;
   
    authToken(): Token {
        
        return new Token();
    }
       
    send() :void {
        this.token = this.authToken();
        console.log("Token" +this.token.token);
       console.log("Envinado por Transportadora")
    }
    receive() : void{
        console.log("Recebendo por Transportadora");
    }

}