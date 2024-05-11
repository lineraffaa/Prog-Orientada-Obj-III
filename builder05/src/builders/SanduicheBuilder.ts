import Bread from "../componentes/Bread";
import Protein from "../componentes/Protein";
import Salad from "../componentes/Salad";
import SanduicheType from "../componentes/SanduicheType";
import Sauce from "../componentes/Sauce";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./interfaces/IBuilder";


export default class SanduicheBuilder implements IBuilder{
    
   private _sanduiche = new Sanduiche();
    reset(): void {
       this._sanduiche = new Sanduiche();
    }
    getSanduiche(): Sanduiche {
        const result : Sanduiche = this._sanduiche;
        this.reset();
        return result;
    }
    setSanduicheType(value: SanduicheType) {
        this._sanduiche.sanduichetype = value;
    }
    setBread(bread: Bread) {
       this._sanduiche.bread = bread;
    }
    
    addSauces(sauce: Sauce) {
        this._sanduiche.addSauces(sauce);
    }
    addSalad(salad: Salad) {
       this._sanduiche.addSalad(salad);
    }
    
    setProntein(protein: Protein) {
        this._sanduiche.protein = protein;
    }
   
    
   
    
   
   
}