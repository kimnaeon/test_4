let button;
let permissedGranted = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  if (typeof(DeviceOrientationEvent) =='undefined' && typeof(DiviceOrientationEvent.requestPermission)==='function') {
    
    DiviceOrientationEvent.requestPermission()
      .catch(() => {
        let button=createButton("click to allow access to sensors");
        button.style("font-size", "24px");
        button.center();
        button.mousePressed(requestAccess);
      })
  }
  else{
    text("Non ios device",windowWidth*0.5,windowHeight*0.5);
    textSize(28);
  }
}

function requestAccess() {
  DeviceOrientationEvent.requestPermission().
    .then(response => {
      if (response =='granted'){
        permissionGranted=true;
      }
  })
  .catch(console.error);
  
  burron.remove();
}

function draw() {
  if (!permissionGranted) return;
  
  
}