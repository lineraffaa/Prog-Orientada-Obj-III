

export default class Telefone{
    private _ddd: string;
    private _numero: number;
    private _tipo: string;
    

    

    public get ddd(): string {
        return this._ddd;
    }
    public set ddd(value: string) {
        this._ddd = value;
    }

    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }

    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }
}