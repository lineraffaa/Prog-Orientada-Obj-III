import Token from "../../../util/Token";

export default interface ICorreio{
    authToken(): Token;
    sendCorreio() : void;
    receiveCorreio(): void;
}