import Token from "../../util/Token";
import ICorreio from "./interface/ICorreio";

export default  class Correio implements ICorreio{
    private token : Token;
    authToken(): Token {
        
        return new Token();
    }
   
    
    sendCorreio(): void{
        this.token = this.authToken();
        console.log("Token" +this.token.token);
       console.log("Envinado por Transportadora");
        console.log("Enviando"); 

    }

    receiveCorreio(): void{
        console.log("Recebeu")
    }
}