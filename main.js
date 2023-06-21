function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}
function borrarlienzo(){
    background("white");
}
function preload(){
   classifier = ml5.imageClassifier('Doodlenet'); 
}
function draw(){
    strokeWeight(10);
    stroke('#1EE2C9');
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);

    }
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}
function gotResult(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
document.getElementById("etiqueta").innerHTML = 'Etiqueta: '+results[0].label;
document.getElementById("porcentaje").innerHTML = 'Presicion: '+Math.round(results[0].confidence*100)+'%'
}
