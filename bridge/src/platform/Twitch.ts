import { IPlatform } from "./interfaces/IPlatform";

export default class Twitch implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("Twitch: Plataforma Configurada. ");
    }
    
    configureRMTP(): void {
        this.authToken();
        console.log("Twitch: Plataforma Broadcasting  ");
    }
    authToken(): void {
        console.log("Twitch: Autorizada a Plataforma ");
    }

}