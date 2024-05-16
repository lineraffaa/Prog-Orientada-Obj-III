import Token from "../../util/Token";

export default interface PayonnerPayment{
    authToken(): Token;
    SendPayment(): void;
    ReceivePayment(): void;
}