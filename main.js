song1= "";
song2= "";
leftwristX= "";
leftwristY= "";

rightwristX= "";
rightristY= "";
function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup() {
    canvas= createCanvas(500,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    modelattacher= ml5.poseNet("pose")    ;
modelattacher.on();
}
function draw() {
    image(video , 0, 0, 500, 500);
    
}
function modelLoaded() {
    console.log("model is loaded!");
}
function gotPoses(results) {
if (pose > 0) {
    console.log(results);
    leftwristX= results[0].pose.leftWrist.x;
    rightwristX= results[0].pose.rightWrist.x;

    leftwristY= results[0].pose.leftWrist.y;
    rightwristY= results[0].pose.rightWrist.y;
}
}