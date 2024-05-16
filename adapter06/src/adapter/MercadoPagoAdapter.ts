import MercadoPago from "../mercadopago/MercadoPago";
import IMercadoPagoPayment from "../mercadopago/interface/IMercadoPagoPayment";
import Token from "../util/Token";


export default class MercadoPagoAdapter implements IMercadoPagoPayment{
    constructor(private mercadopago: MercadoPago){}
 
   
    authToken(): Token {
       return new Token();
    }
   SendPayment(): void {
        this.mercadopago.SendPayment();
    }
    ReceivePayment(): void {
      this.mercadopago.ReceivePayment();
    }


}