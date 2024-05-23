import { IPlatform } from "./interfaces/IPlatform";

export default class Youtube implements IPlatform{
   constructor(){
    this.configureRMTP();
    console.log("Youtube: Plataforma Configurada. ");
   }
   
    configureRMTP(): void {
        this.authToken();
        console.log("Youtube: Plataforma Broadcasting ");
    }
    authToken(): void {
        console.log("Youtube: Autorizada a Plataforma ");
    }
   

}