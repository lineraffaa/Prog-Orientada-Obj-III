import AdvancePlay from "./Play/AdvancePlay";
import Play from "./Play/Play";
import PlayStation from "./consoles/PlayStation";
import Xbox from "./consoles/Xbox";
import { IConsole } from "./consoles/interface/IConsole";

function Start(consoles: IConsole) {
  const play = new Play(consoles);
  console.log("Aguarde..");
  play.playing();
  play.result();
}
Start(new PlayStation());
Start(new Xbox());

function Advance(consoles: IConsole) {
  const play = new AdvancePlay(consoles);
  console.log("Aguarde..");
  play.challenge();
  play.result();
  play.playing();
  console.log(".......");
}

Advance(new PlayStation());
Advance(new Xbox());
