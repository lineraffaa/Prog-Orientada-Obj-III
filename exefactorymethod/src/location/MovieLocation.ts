import Item from "../type/interface/item";
import Movie from "../type/Movie";
import Location from "./Location";

export default class MovieLocation extends Location {
  
   protected createLocation(): Item{
      return new Movie();

   }

}