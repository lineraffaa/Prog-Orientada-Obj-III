import ICorreio from "../correios/interface/ICorreio";

export default class Cliente implements ICorreio{
    sendCorreio() {
        throw new Error("Method not implemented.");
    }
    receiveCorreio() {
        throw new Error("Method not implemented.");
    }

}