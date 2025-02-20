//MIDI to Freq HTML Elements
let midiInput = document.getElementById("midiInput");
let freqOut = document.getElementById("freqResult");

//Freq to MIDI HTML Elements
let freqInput = document.getElementById("freqInput");
let midiOut = document.getElementById("midiResult");

//DBFS to LinAmp HTML Elements

let dbfsInput = document.getElementById("dbfsInput");
let linearOut = document.getElementById("linearResult");

//LinAmp to dBFS HTML Elements
let linearInput = document.getElementById("linearInput");
let dBFSOut = document.getElementById("dbfsResult");


//Define functyions for conversion
const musicTools = {
    
    midiPitchToFrequency() {
    let midiPitch = parseFloat(midiInput.value);
    freqOut.innerText = 440 * Math.pow(2, (midiPitch - 69) / 12);
    },

    frequencyToMidiPitch() {
       let frequency = parseFloat(freqInput.value);
        midiOut.innerText = 69 + 12 * Math.log2(frequency/ 440);    
    },
    dbfsToLinearAmplitude() {
        let dbfs = parseFloat(dbfsInput.value);
        linearOut.innerText = Math.pow(10, dbfs / 20);
    },
   
    linearAmpTodBFS() {
    let linear = parseFloat(linearInput.value);
        dBFSOut.innerText = 20 * Math.log10(linear);
        
    },
};

export { musicTools };