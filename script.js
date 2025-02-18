import {freq, midiPitch, linear, dBFS} from "./MusicTools.js";

let midiInput = document.getElementById("midiToFreq");
let freqInput = document.getElementById("freqToMidi");
let dBFSInput = document.getElementById("dbfsToLinear");
let linearInput = document.getElementById("linearToDbfs");


freqInput.addEventListener("click", freq);
midiInput.addEventListener("click", midiPitch);
dBFSInput.addEventListener("click", linear);
linearInput.addEventListener("click", dBFS);

console.log(midiInput)