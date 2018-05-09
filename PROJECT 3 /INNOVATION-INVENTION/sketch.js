var video;
var button;
var snapshots = [];
var counter = 0;
var vScale = 4;
var total;

// This is the width / height of 1 snapshots
// Use this dimension in createCanvas to determine width by multiplying
// Be careful of aspect ratio in changing these values
// I think the ratio is 4 : 3
var w = 140;
var h = 180;

var picture_count = 0;

function setup() {
  createCanvas(w * 3, windowHeight);
  background(0, 0, 255);
  video = createCapture(VIDEO);
  // This is width and height of video
  // Any CSS width or height for video will be overridden
  video.size(160 * 4, 240 * 2);
}

function mousePressed() {
  if (picture_count > 0 && picture_count % 12 == 0) {
    console.log("over 12");
    snapshots = [];
  }

  picture_count++;
  takesnap();

}

function draw() {
  var x = 0;
  var y = 0;

  // How many cells fit in the canvas
  total = floor(width / w) * floor(height / h);

  // snapshots[counter] = video.get();
  // counter++;
  if (counter == total) {
    counter = 0;
  }

  for (var i = 0; i < snapshots.length; i++) {
    var index = i % snapshots.length;
    image(snapshots[index], x, y, w, h);
    x = x + w;
    if (x >= width) {
      x = 0;
      y = y + h;
    }
  }

  // fade();

}

function takesnap() {
  makeFilter();
  snapshots.push(video.get());
  
}

var filterset = 0;
var filter_count = 12;

function makeFilter() {
  if (picture_count > 0 && picture_count % 12 == 0) {
    filterset++;
  }

  var randomN = Math.ceil(Math.random() * filter_count);
  var filter1 = randomN + "-a.png";
  var img = document.createElement("img");
  img.id = picture_count % 12;

  img.src = filter1;

  if (filterset > 0) {
    random2 = Math.ceil(Math.random() * filter_count);
    filter2 = random2 + "-a.png";
    var past_number = (picture_count % 12)+1;
    var past_img = document.getElementById(past_number);
    console.log(past_img);
    past_img.src = filter2;

  }

  var filtercontainer = document.getElementById("filtercontainer");
  filtercontainer.appendChild(img);

}

/* almost worked ...
function fade() {
  var amount = 100;
  amount -= 0.1;
  if (snapshots[0]) {
    console.log(amount);
    snapshots[0].style.opacity = amount;
  }
}
*/




