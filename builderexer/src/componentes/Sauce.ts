
export default class Sauce{
    constructor(private _sc: string){}

    public get sc(): string {
        return this._sc;
    }
    public set sc(value: string) {
        this._sc = value;
    }
}

    

