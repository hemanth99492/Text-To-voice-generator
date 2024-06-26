let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voiceSelect.innerHTML = '';
    voices.forEach((voice, i) => {
        const option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    const selectedVoice = voices[voiceSelect.selectedIndex];
    speech.voice = selectedVoice;
    window.speechSynthesis.speak(speech);
});
