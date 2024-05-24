import item from "./interface/item";

export default class Movie implements item{
    start(): void {
        console.log("Novo filme");
    }
    getDescription(): void {
        console.log("Terror");
    }

}