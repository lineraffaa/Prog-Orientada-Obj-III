import AdvancedLive from "./Transmission/AdvancedLive";
import Live from "./Transmission/Live";
import Facebook from "./platform/Facebook";
import Twitch from "./platform/Twitch";
import Youtube from "./platform/YouTube";
import { IPlatform } from "./platform/interfaces/IPlatform";

function startLive(platform: IPlatform){
    console.log("Aguarde..");
    const live = new Live(platform);
    live.broadcasting();
    live.result();
    
}

startLive(new Youtube());
startLive(new Twitch());
startLive(new Facebook());

function staradvance(platform: IPlatform){
    console.log("Aguarde..");
    const live = new AdvancedLive(platform);
    live.broadcasting();
    live.result();
    live.subtitles();
    live.comments();
    console.log(".......");
}

staradvance(new Youtube());
staradvance(new Twitch());
staradvance(new Facebook());
