var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var images = "";
var Apple
var arvore
var casa
var diamante
var vila
function preload(){
    Apple = loadImage("Apple.jpg");
    arvore = loadImage("arvore.jpg");
    casa = loadImage("casa.png");
    diamante = loadImage("Diamond.png");
    vila = loadImage("Vila.png");
}
function setup(){
canvas = createCanvas(1366,450);
}
function Start(){
    document.getElementById("status").innerHTML = "O sistema está ouvindo, pode falar";
    recognition.start()
}
recognition.onresult = function(event){
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML = "Fala reconhecida: "+ content;
    if (content == "maçã"){
        images = "maça";
    }else if (content == "árvore"){
        images = "arvore";
    }else if (content == "casa"){
        images = "casa";
    }else if (content == "diamante"){
        images = "diamante";
    }else if (content == "cidade"){
        images = "vila";
    }
}
function draw(){
    if (images == "maça"){
        images = "";
        image(Apple,500,10,300,300);
    }else if (images == "arvore"){
        images = "";
        image(arvore,400,10,400,400);
    }else if (images == "casa"){
        images = "";
        image(casa,400,10,400,400);
    }else if (images == "diamante"){
        images = "";
        image(diamante,500,10,300,300);
    }else if (images == "vila"){
        images = "";
        image(vila,300,10,500,500);
    }
}