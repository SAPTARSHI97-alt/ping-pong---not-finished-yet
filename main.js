function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}
function draw() {
	game()
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
                                          



