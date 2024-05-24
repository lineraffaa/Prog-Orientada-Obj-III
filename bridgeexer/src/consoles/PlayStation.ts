import { IConsole } from "./interface/IConsole";

export default class PlayStation implements IConsole{
    
    constructor(){
        this.configure();
        console.log("PlayStation Configurado ");
    }
   
    
    configure(): void {
        console.log("PlayStation");
    }
    authToken(): void {
        console.log("PlayStation Autorizado");
    }

}