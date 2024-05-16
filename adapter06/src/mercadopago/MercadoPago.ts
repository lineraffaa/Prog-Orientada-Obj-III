import Token from "../util/Token";
import IMercadoPagoPayment from "./interface/IMercadoPagoPayment";


export default class MercadoPago implements IMercadoPagoPayment{
    private token : Token;
    authToken(): Token {
       return new Token();
    }
    SendPayment(): void {
        this.token = this.authToken();
        console.log("Token" +this.token.token);
        console.log("Enviando Pagamento Via PayPal");
    }
    ReceivePayment(): void {
        console.log("Recebendo o Pagamento");
        
    }
  

    
}