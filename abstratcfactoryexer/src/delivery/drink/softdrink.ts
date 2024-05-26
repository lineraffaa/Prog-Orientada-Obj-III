import Drink from "./interfaces/Drink";

export default class softdrink implements Drink{
    getserv(): void {
        console.log("Softdrink");
    }
    servir(): void {
        console.log("pronto");
    }

}