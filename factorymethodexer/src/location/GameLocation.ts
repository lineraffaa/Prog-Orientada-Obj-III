import Game from "../type/Game";
import Item from "../type/interface/item";
import Location from "./Location";
export default class GameLocation extends Location{
    protected createLocation(): Item{
        return new Game();
    }
}