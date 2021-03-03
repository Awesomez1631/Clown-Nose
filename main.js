nosex = 0;
nosey = 0;
function preload(){
clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center(); 
    video = createCapture(VIDEO);
    video.size(350,300);
    //video.center();
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('modelloaded');
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nosex = results[0].pose.nose.x - 15;
        nosey = results[0].pose.nose.y - 15;
    }
}
function draw(){
    image(video,0,0,350,300);
    image(clown_nose,nosex,nosey,30,30);    
}
function takesnapshot(){
    save("Cb.png");
}

