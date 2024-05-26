import IFood from "./interfaces/Ifood";

export default class hotdog implements IFood{
    getserv(): void {
        console.log("Hotdog");
    }
    servir(): void {
        console.log("pronto");
    }

}