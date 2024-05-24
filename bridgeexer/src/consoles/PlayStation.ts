import { IConsole } from "./interface/IConsole";

export default class PlayStation implements IConsole{
    
    constructor(){
        this.configure();
        console.log("PlayStation Ligando ");
    }
   
    
    configure(): void {
        this.authToken();
        console.log("PlayStation iniciando");
    }
    authToken(): void {
        console.log("PlayStation Autorizado");
    }

}