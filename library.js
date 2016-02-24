/**
 * Created by Frank on 2/24/2016.
 */
var c = document.querySelector("canvas");
var ctx = c.getContext("2d");

c.width = c.width;
var img = document.getElementById("scream");
ctx.drawImage(img,0,0);
var imgData = ctx.getImageData(0,0, c.width, c.height);

// getting the image data for the first pixel
for (var i = 0;i<imgData.data.length;i+=4)
    {
        imgData.data[i+3]= imgData.data[i]* 0.3 + imgData.data[i+1]*0.59 + imgData.data[i+2]*0.11;
        imgData.data[i]= 0;
        imgData.data[i+1]=  0;
        imgData.data[i+2]=  0;
    }

ctx.putImageData(imgData,0,0);