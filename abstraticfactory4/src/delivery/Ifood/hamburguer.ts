import IFood from "./interfaces/Ifood";

export default class hamburguer implements IFood{
    getserv(): void {
        console.log("hamburguer");
    }
    servir(): void {
        console.log("prepardo");
    }

}