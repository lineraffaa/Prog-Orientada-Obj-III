import hotdog from "./Ifood/hotdog";
import Ifood from "./Ifood/interfaces/Ifood";
import Drink from "./drink/interfaces/Drink";
import softdrink from "./drink/softdrink";
import ideliveryfactory from "./interfaces/ideliveryfactory";

export default class ifooddelivery implements ideliveryfactory{
    createDeliveryDrink() : Drink{
        return new softdrink();
    }
    createDeliveryFood() : Ifood{
      return new hotdog();
    }

}