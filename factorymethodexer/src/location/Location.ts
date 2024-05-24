import item from "../type/interface/item";

export default abstract class Location {
    startItem(): void{
        const item = this.createLocation();
        item.start();
        item.getDescription();

    }
    protected abstract createLocation(): item;

}