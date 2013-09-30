
// Wrap all code in an anonymous function to avoid polluting global namespace
(function() {
  
  // Declare variables needed within this function scope
  var cube, width, height, depth, viewer;
  var frames = [];
  
  // Define callback for when a frame is read from FITS
  onFrame = function(arr, opts) {
    console.log("onFrame");
    
    var extent = cube.getExtent(arr);
    frame = {
      arr: arr,
      min: extent[0],
      max: extent[1]
    };
    frames[opts.index] = frame;
    
    viewer.loadImage('frame', arr, width, height);
    viewer.setExtent(extent[0], extent[1]);
    viewer.setStretch("linear");
  }
  
  onSlider = function(e) {
    console.log("onSlider");
    var index = parseInt(e.target.value);
    var frame = frames[index];
    
    if (frame != undefined) {
      viewer.loadImage('frame', frame.arr, width, height);
      viewer.setExtent(frame.min, frame.max);
      viewer.setStretch("linear");
    } else {
      cube.getFrame(index, onFrame, {index: index});
    }
  }
  
  // Define a callback function that is executed after a file
  // is read into memory.
  onFITS = function(f) {
    console.log("onFITS", f);
    
    // Get dataunit representing cube
    // NOTE: Indexing starts at zero
    cube = f.getDataUnit(0);
    width = cube.width;
    height = cube.height;
    depth = cube.depth;
    
    // Select and connect slider to function
    var sliderEl = document.querySelector("input.scrub");
    sliderEl.max = depth - 1;
    sliderEl.onchange = onSlider;
    
    // Set up FITS viewer
    viewerEl = document.querySelector("div.viewer");
    viewer = new astro.WebFITS(viewerEl, width);
    
    // Read first frame
    cube.getFrame(0, onFrame, {index: 0});
  }
  
  // Triggered when DOM is ready, see event listener below
  DOMReady = function() {
    console.log("DOMReady");
    
    // Set the path to the location of the FITS file
    var path = "data/NGC_6946_NA_CUBE_THINGS.fits";
    
    // Parse the file
    new astro.FITS(path, onFITS);
  }
  
  // Wait for DOM to load before setting up app
  window.addEventListener('DOMContentLoaded', DOMReady, false);

}).call(this);