import { IConsole } from "./interface/IConsole";

export default class Xbox implements IConsole{
   
    constructor(){
        this.configure();
        console.log("Xbox Configurado ");
    }
  
   
    configure(): void {
        console.log("Xbox ");
    }
    authToken(): void {
        console.log("Xbox Autorizado");
    }

}