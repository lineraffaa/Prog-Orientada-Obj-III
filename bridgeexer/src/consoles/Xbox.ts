import { IConsole } from "./interface/IConsole";

export default class Xbox implements IConsole{
   
    constructor(){
        this.configure();
        console.log("Xbox ligando ");
    }
  
   
    configure(): void {
        this.authToken();
        console.log("Xbox iniciando");
    }
    authToken(): void {
        console.log("Xbox Autorizado");
    }

}