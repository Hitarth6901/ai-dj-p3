gameon=""
believer=""
leftx=0
lefty=0
rightx=0
righty=0

function preload(){
    gameon=loadSound("game on .mp3")
        believer=loadSound("believer.mp3")
    
}

function setup(){
    Canvas = createCanvas(600,500)
    Canvas.center()
    video= createCapture(VIDEO)
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("Model is intialized")
}
function gotPoses(result){
if(result.length>0){
    console.log(result)
    rightx=result[0].pose.rightWrist.x
    righty=result[0].pose.rightWrist.y
    leftx=result[0].pose.leftWrist.x
    lefty=result[0].pose.leftWrist.y
}
}

function draw(){
    image(video,0,0,600,500)
}