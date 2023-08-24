img = "";
status ="";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img,0, 0, 640, 420);
    fill("#00FF00");
    text("Dog", 46, 75);
    noFill();
    stroke("#00FF00");
    rect(30, 60, 450, 350 );

    fill("#00FF00");
    text("Cat", 320, 120);
    noFill();
    stroke("#00FF00");
    rect(300, 70, 270, 320 );
    
}

function modalLoaded()
{
    console.log("Modal Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}