import Token from "../../util/Token";

export default interface IPayPalPayment{
    authToken(): Token;
    SendPayment(): void;
    ReceivePayment(): void;
}