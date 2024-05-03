import hamburguer from "./Ifood/hamburguer";
import Ifood from "./Ifood/interfaces/Ifood";
import beer from "./drink/beer";
import Drink from "./drink/interfaces/Drink";
import ideliveryfactory from "./interfaces/ideliveryfactory";

export default class aiquefomedivery implements ideliveryfactory{
    createDeliveryDrink(): Drink {
       return new beer();
    }
    createDeliveryFood(): Ifood {
        return new hamburguer();
    }

}