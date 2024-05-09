export default class Engine{
    public get power(): number {
        return this._power;
    }
    public set power(value: number) {
        this._power = value;
    }

    constructor (private _power: number){

    }


}