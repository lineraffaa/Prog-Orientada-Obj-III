import Payoneer from "../payoneer/Payoneer";
import IPayPalPayment from "../PayPal/interface/IPayPalPayment";
import Token from "../util/Token";

export default class PayoneerAdapter implements IPayPalPayment{
   constructor(private payonner: Payoneer){}
 
   
    authToken(): Token {
       return new Token();
    }
   SendPayment(): void {
        this.payonner.SendPayment();
    }
    ReceivePayment(): void {
      this.payonner.ReceivePayment();
    }

}