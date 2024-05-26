import Drink from "./interfaces/Drink";

export default class beer implements Drink{
    getserv(): void {
        console.log("Cerveja");
    }
    servir(): void {
    console.log("pronto");
    }
   
    
}