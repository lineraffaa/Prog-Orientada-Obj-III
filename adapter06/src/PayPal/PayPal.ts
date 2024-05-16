import Token from "../util/Token";
import IPayPalPayment from "./interface/IPayPalPayment";

export default class PayPal implements IPayPalPayment{
    private token : Token;
    authToken(): Token {
        return new Token();
    }
    SendPayment(): void {
        this.token = this.authToken();
        console.log("Token" +this.token.token);
        console.log("Enviando Pagamento Via PayPal")
    }
    ReceivePayment():  void {
        console.log("Recebendo o Pagamento");
    }

}