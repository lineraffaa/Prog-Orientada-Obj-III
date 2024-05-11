import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./builders/directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder: SanduicheBuilder = new SanduicheBuilder();
const director: Director = new Director(builder);

director.constructXBurguer();
const hamburg: Sanduiche = builder.getSanduiche();
console.log("Sanduiche " + hamburg.sanduichetype);
console.log("bread " + hamburg.bread);
console.log("salad " + hamburg.salad.length +hamburg.salad[0].sl);
console.log("salad " + hamburg.salad.length +hamburg.salad[1].sl);
console.log("protein " + hamburg.protein);
console.log("Molho " + hamburg.sauces.length +hamburg.sauces[0].sc);
console.log("Molho " + hamburg.sauces.length +hamburg.sauces[1].sc);

director.constructorHotDog();
const hotd : Sanduiche = builder.getSanduiche();
console.log("Sanduiche " + hotd.sanduichetype);
console.log("bread " + hotd.bread);
console.log("protein " + hotd.protein);
console.log("Molho " + hotd.sauces.length +hotd.sauces[0].sc);
console.log("Molho " + hotd.sauces.length +hotd.sauces[1].sc);










