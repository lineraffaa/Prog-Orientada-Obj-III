import Cliente from "./Cliente";
import Produto from "./Produto";

export default class Venda{
    private _codigo: number;
    
    private _data: number;

    private _cliente: Cliente;
   
    private _produtos: Produto[]; 
    
    constructor(){
        this._produtos = []
    }

    

    public get codigo(): number {
        return this._codigo;
    }
    public set codigo(value: number) {
        this._codigo = value;
    }
    
    public get data(): number {
        return this._data;
    }
    public set data(value: number) {
        this._data = value;
    }
    
    public get produtos(): Produto[] {
        return this._produtos;
    }
    public set produtos(value: Produto[]) {
        this._produtos = value;
    }

    public get cliente_1(): Cliente {
        return this._cliente;
    }
    public set cliente_1(value: Cliente) {
        this._cliente = value;
    }
   

    CalcularValor(){
        let valortotal: number;
    for (let i = 0; i < this._produtos.length; i++) {
            valortotal += this._produtos[i].valor;
            
          }
          return valortotal;
    }

    
}