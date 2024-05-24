import { IConsole } from './../consoles/interface/IConsole';
import Play from './Play';

export default class AdvancePlay extends Play {
    constructor(console:IConsole){
        super(console);
    }
    challenge(): void{
    console.log("Desafio")
    } 
}