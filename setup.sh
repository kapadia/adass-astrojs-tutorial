mkdir -vp data

curl -k "http://astrojs.s3.amazonaws.com/sample/L1448_13CO.fits.gz" -o "data/L1448_13CO.fits.gz"
gunzip data/L1448_13CO.fits.gz

curl -k "http://astrojs.s3.amazonaws.com/sample/eso149-g003.HI-cube.fits.gz" -o "data/eso149-g003.HI-cube.fits.gz"
gunzip data/eso149-g003.HI-cube.fits.gz