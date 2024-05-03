import Drink from "../drink/interfaces/Drink";
import IFood from "../Ifood/interfaces/Ifood";

export default interface ideliveryfactory{
    createDeliveryDrink() : Drink;
    createDeliveryFood(): IFood;
}