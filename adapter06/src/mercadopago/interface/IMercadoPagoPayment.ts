import Token from "../../util/Token";

export default interface IMercadoPagoPayment{
    authToken(): Token;
    SendPayment(): void;
    ReceivePayment(): void;
}