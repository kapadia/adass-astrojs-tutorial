
# ADASS 2013 - Web Development Tutorial

This directory contains all files needed to create a small web app utilizing astrojs libraries.

    css-
        |- bootstrap.css
        |- main.css
    data-
         |- L1448_13CO.fits
    index.html
    lib-
        |- fits.js
        |- main.js
        |- webfits-gl.js
    setup.sh


This activity will demonstrate `astrojs` libraries by building a tool for viewing FITS data cubes.  The app will require approximately 80 lines of Javascript.

## Getting Started
    

Make sure to be running a moderately recent version of Chrome or Firefox.

    # Retreive sample data
    ./setup.sh
    
    # Start local server using either Python or NodeJS
    
    # Using Python
    python -m SimpleHTTPServer
    
    # If using Node, be sure to have installed http-server
    npm install http-server
    
    # Using Node
    http-server
  