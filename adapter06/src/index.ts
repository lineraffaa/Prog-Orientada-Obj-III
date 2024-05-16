
//const payment: IPayPalPayment = new PayPal();

import IPayPalPayment from "./PayPal/interface/IPayPalPayment";
import PayoneerAdapter from "./adapter/PayoneerAdapter";
import Payonneer from "./payoneer/Payoneer";

//payment.SendPayment();
//payment.ReceivePayment();

const payment : IPayPalPayment = new PayoneerAdapter(new Payonneer());

payment.SendPayment();
payment.ReceivePayment();

//const payment : IMercadoPagoPayment = new  MercadoPagoAdapter(new MercadoPago());
//payment.SendPayment();
//payment.ReceivePayment();