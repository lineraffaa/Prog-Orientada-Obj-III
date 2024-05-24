import Item from "./interface/item";

export default class Game implements Item{
    start(): void {
      console.log("Novo Game");
    }
    getDescription(): void {
       console.log("Ação")
    }

}