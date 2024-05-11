import Bread from "../../componentes/Bread";
import Protein from "../../componentes/Protein";
import Salad from "../../componentes/Salad";
import SanduicheType from "../../componentes/SanduicheType";
import Sauce from "../../componentes/Sauce";
import IBuilder from "../interfaces/IBuilder";


export default class Director{
    constructor(private builder: IBuilder){
        
    }

    constructXBurguer(){
    this.builder.setSanduicheType(SanduicheType.HAMBURGUER);
    this.builder.setBread(Bread.PAOHAMBURGUER);
    this.builder.addSalad(new Salad("ALFACE"));
    this.builder.addSalad(new Salad("TOMATE"));
    this.builder.setProntein(Protein.HAMBURGUERBOVINO)
    this.builder.addSauces(new Sauce("Maionese"));
    this.builder.addSauces(new Sauce("BQQ"));
        
        
    }

    constructorHotDog(){
       this.builder.setSanduicheType(SanduicheType.HOTODOG);
       this.builder.setProntein(Protein.SALSICHA)
       this.builder.setBread(Bread.PAODEHOTDOG);
       this.builder.addSauces(new Sauce("Ketchup"));
       this.builder.addSauces(new Sauce("Maionese Verde"));
        
        
      
    }
}