import Bread from "../componentes/Bread";
import Protein from "../componentes/Protein";
import Salad from "../componentes/Salad";
import SanduicheType from "../componentes/SanduicheType";
import Sauce from "../componentes/Sauce";

export default class Sanduiche {
    [x: string]: any;
    private _sanduichetype: SanduicheType;
    
    private _protein: Protein;
    

    private _bread: Bread; 
   
    private _salads: Salad[] = [];
    

    private _sauces: Sauce[] = [];

    
   
    public get sanduichetype(): SanduicheType {
        return this._sanduichetype;
    }
    public set sanduichetype(value: SanduicheType) {
        this._sanduichetype = value;
    }

    public get bread(): Bread {
        return this._bread;
    }
    public set bread(value: Bread) {
        this._bread = value;
    }

    public get salad(): Salad[] {
        return this._salads;
    }
    public set salad(value: Salad[]) {
        this._salads = value;
    }

    public get sauces(): Sauce[] {
        return this._sauces;
    }
    public set sauces(value: Sauce[]) {
        this._sauces = value;
    }

    public addSauces(sauce :Sauce){
        this.sauces.push(sauce);
    }

  public addSalad(salad : Salad){
    this.salad.push(salad);
  }
    public get protein(): Protein {
        return this._protein;
    }
    public set protein(value: Protein) {
        this._protein = value;
    }


}
