function preload() {
  var scripts = ["script1.js", "script2.js"];
  var randomScript = scripts[Math.floor(Math.random() * scripts.length)];
  loadScript(randomScript);
}

function setup() {
  // votre code ici
}

function draw() {
  // votre code ici
}
