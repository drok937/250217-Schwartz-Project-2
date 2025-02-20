import { musicTools } from "./MusicTools.js";

//Define HTML Conversion Button
let midiButton = document.getElementById("midiToFreq");
let freqButton = document.getElementById("freqToMidi");
let dBFSButton = document.getElementById("dbfsToLinear");
let linAmpButton = document.getElementById("linearToDbfs");

//Set actions (referring to functions in musicTools.js) to happen when buttons are clicked
midiButton.addEventListener("click", musicTools.midiPitchToFrequency);
freqButton.addEventListener("click", musicTools.frequencyToMidiPitch);
dBFSButton.addEventListener("click", musicTools.dbfsToLinearAmplitude);
linAmpButton.addEventListener("click", musicTools.linearAmpTodBFS);