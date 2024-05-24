import { IConsole } from '../consoles/interface/IConsole';
import { IPlay } from './interfaces/IPlay';


export default class Play implements IPlay{
      
    constructor(private console : IConsole){

    }

    playing(): void {
        console.log("jogando");
    }
    result(): void {
        console.log("Pronto");
    }

}