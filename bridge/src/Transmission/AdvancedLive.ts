import { IPlatform } from "../platform/interfaces/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live{
    constructor(platform:IPlatform){
        super(platform);
    }

    subtitles():void{
        console.log("Legendas Ativas na transmissaão")
    }
    comments():void{
        console.log("Comentarios liberados na transmissão")
    }
}