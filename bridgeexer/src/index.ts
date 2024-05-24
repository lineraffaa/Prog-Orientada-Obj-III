import AdvancePlay from "./Play/AdvancePlay";
import Play from "./Play/Play";
import PlayStation from "./consoles/PlayStation";
import Xbox from "./consoles/Xbox";
import { IConsole } from "./consoles/interface/IConsole";

function Start(console: IConsole) {
  const play = new Play(console);
  play.playing();
  play.result();
}
Start(new PlayStation());
Start(new Xbox());

function Advance(console: IConsole) {
  const play = new AdvancePlay(console);

  play.challenge();
  play.result();
  play.playing();
}

Advance(new PlayStation());
Advance(new Xbox());
