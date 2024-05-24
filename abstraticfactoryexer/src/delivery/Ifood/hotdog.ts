import IFood from "./interfaces/Ifood";

export default class hotdog implements IFood{
    getserv(): void {
        console.log("hotdog");
    }
    servir(): void {
        console.log("pronto");
    }

}