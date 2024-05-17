import Token from "../../../util/Token";

export default interface ITransportadora{
    authToken(): Token;
    send() : void;
    receive(): void;
}