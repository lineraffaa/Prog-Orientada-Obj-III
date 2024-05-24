import TransportadoraAdapter from "./Adapter/TransportadoraAdapter";
import ICorreio from "./correios/interface/ICorreio";
import Transportadora from "./transporte/Transportadora";


const transportadora : ICorreio = new TransportadoraAdapter(new Transportadora());
transportadora.receiveCorreio();
transportadora.sendCorreio();