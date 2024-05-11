import Bread from "../../componentes/Bread";
import Protein from "../../componentes/Protein";
import Salad from "../../componentes/Salad";
import SanduicheType from "../../componentes/SanduicheType";
import Sauce from "../../componentes/Sauce";
import Sanduiche from "../../products/Sanduiche";

export default interface IBuilder{
   reset() : void;
   getSanduiche() : Sanduiche;
   setSanduicheType(sanduichetype : SanduicheType);
   setProntein(protein: Protein);
   setBread(bread: Bread);
   addSauces(sauce : Sauce);
   addSalad(salad: Salad);
   

}