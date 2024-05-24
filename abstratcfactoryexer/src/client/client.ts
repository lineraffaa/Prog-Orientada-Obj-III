import IFood from "../delivery/Ifood/interfaces/Ifood";
import Drink from "../delivery/drink/interfaces/Drink";
import ideliveryfactory from "../delivery/interfaces/ideliveryfactory";

export default class client  {
    private food : IFood
    private drink : Drink

    constructor(factory: ideliveryfactory){
        this.food = factory.createDeliveryFood()
        this.drink = factory.createDeliveryDrink()
    }

    startDelivery():void{
        this.drink.getserv()
        this.food.getserv()

    }
}