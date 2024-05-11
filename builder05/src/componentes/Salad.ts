
export default class Salad{
    constructor(private _sl : string){} 
    
    public get sl(): string {
        return this._sl;
    }
    public set sl(value: string) {
        this._sl = value;
    }
}