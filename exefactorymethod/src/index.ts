import GameLocation from "./location/GameLocation"
import Location from "./location/Location"
import MovieLocation from "./location/MovieLocation"

declare var process

let location : Location

if(process.argv.includes("jogo")){
    location = new GameLocation()
}else if(process.argv.includes("filme")){
    location = new MovieLocation()
}else{
    console.log("Tente novamente! As opções disponíveis são: 'jogo' ou 'filme'!")
}

if(location){
    location.startItem()
}