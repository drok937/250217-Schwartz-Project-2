const MusicTools = {
    midiPitchToFrequency(midiPitch) {
        const freq = 440 * Math.pow(2, ((midiPitch - 69) / 12));
        return freq;
    },

    frequencyToMidiPitch(frequency) {
       const midiPitch =  69 + 12 * Math.log2(frequency / 440);
        return midiPitch;
    },
    dbfsToLinearAmplitude(dbfs) {
        const linear = Math.pow(10, dbfs / 20);
        return linear;
    },

    linearAmplitudeTodBFS(linear) {
        const dBFS = 20 * Math.log10(linear);
        return dBFS;
    },
};
midiPitchToFrequency(400);
export {freq, midiPitch, linear, dBFS};