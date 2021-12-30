function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uceG6nW5g/model.jason', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}