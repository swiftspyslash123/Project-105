Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
 Webcam.attach('#camera');
 function takesnapshot(){
  Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML = '<img id="capturedimage" src="'+data_uri+'">';
  })
 }

 console.log(ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cljNaDbhR/',modelloaded);
 
 function modelloaded(){
     console.log('modelloaded');
 }

function check(){
    img = document.getElementById("capturedimage");
    classifier.classify(img, gotresult);
}

function gotresult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("resultobjectname").innerHTML = results[0].label;
        document.getElementById("resultobjectaccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}