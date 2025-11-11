function speak() {
  const text = document.getElementById("poemInput").value;
  const pitch = document.getElementById("pitch").value;
  const rate = document.getElementById("rate").value;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch = parseFloat(pitch);
  utterance.rate = parseFloat(rate);
  utterance.lang = "en-US";

  speechSynthesis.speak(utterance);
}
