
import { IPlatform } from "./interfaces/IPlatform";


export default class Facebook implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("Facebook: Plataforma Configurada. ");
    }
    
    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: Plataforma Broadcasting  ");
    }
    authToken(): void {
        console.log("Facebook: Autorizada a Plataforma ");
    }

}
