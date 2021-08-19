Webcam.set({
width:350, height:300, image_format:'png', png_quality:90
});
c1=document.getElementById("camera");
Webcam. attach(c1);
function takepic(){
Webcam. snap(function(data_uri)
{
document.getElementById("result").innerHTML = '<img id="capturedimage" src="'+data_uri+'"/>';
}
);
}
mymodel = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/y15xZfAwy/model.json', modelLoaded);
function modelLoaded(){
console.log("My Model Has Loaded")

}


function speak(){
    synth = window.speechSynthesis;
    speech1 = "your first emotion is " + pred1;
    speech2 = "your second emotion is " + pred2;
    x = new SpeechSynthesisUtterance(speech1 + speech2);
    synth.speak(x);
}

function predict(){
img = document.getElementById("capturedimage");
mymodel.classify(img, gotResult);
}

function gotResult(error, results){
if(error){
    console.log(error);
}
else{
console.log(results);
document.getElementById("emotionname").innerHTML = results[0].label;
document.getElementById("emotionname2").innerHTML = results[1].label;
pred1 = results[0].label;
pred2 = results[1].label;
speak();
if(results[0].label == "happy")
{
document.getElementById("emoji1").innerHTML = "&#128522;";

}
if(results[0].label == "sad")
{
    document.getElementById("emoji1").innerHTML = "&#128532;";
}


if(results[0].label == "angry")
{
    document.getElementById("emoji1").innerHTML = "&#128545;";
}

if(results[1].label == "happy")
{
    document.getElementById("emoji2").innerHTML = "&#128512;";
}

if(results[1].label == "sad")
{
    document.getElementById("emoji2").innerHTML = "&#128546;";
}

if(results[1].label == "angry")
{
    document.getElementById("emoji2").innerHTML = "&#128548;";
}


}












}
