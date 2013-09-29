
// Wrap all code in an anonymous function to avoid polluting global namespace
(function() {
  
  // Define callback for when a frame is read from FITS
  onFrame = function(arr, opts) {
    console.log("onFrame");
  }
  
  onSlider = function(e) {
    console.log("onSlider");
  }
  
  // Define a callback function that is executed after a file
  // is read into memory.
  onFITS = function(f) {
    console.log("onFITS", f);
  }
  
  // Triggered when DOM is ready, see event listener below
  DOMReady = function() {
    console.log("DOMReady");
    
    // Set the path to the location of the FITS file
    var path = "data/L1448_13CO.fits";
    
    // Parse the file
    new astro.FITS(path, onFITS);
  }
  
  // Wait for DOM to load before setting up app
  window.addEventListener('DOMContentLoaded', DOMReady, false);

}).call(this);