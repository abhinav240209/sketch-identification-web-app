function preload() {
    classifier=ml5.imageClassifier("DoodleNet");
    
}

function setup(){
   canvas=createCanvas(400,300);
   canvas.center();
   canvas.mouseReleased(classify_doodle);
   synth=window.speechSynthesis;

}

function draw() {
   if(mouseIsPressed){
   stroke("black");
   strokeWeight(3);
  line(pmouseX, pmouseY, mouseX, mouseY);
   }
  
}

function classify_doodle() {
   classifier.classify(canvas, gotResult);
}

function gotResult(error,results) {
   if(error){
   console.error(error);
   }
   else{
      console.log(results);
      myResult=results[0].label;
      myConfidence=Math.floor(results[0].confidence*100);
      document.getElementById("label_name").innerHTML=myResult;
      document.getElementById("confidence_name").innerHTML=myConfidence;
      utterThis=new SpeechSynthesisUtterance(myResult);
      synth.speak(utterThis);
   }
}

