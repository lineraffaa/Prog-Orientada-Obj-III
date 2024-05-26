import IFood from "./interfaces/Ifood";

export default class hamburguer implements IFood{
    getserv(): void {
        console.log("Hamburguer");
    }
    servir(): void {
        console.log("prepardo");
    }

}