import React, { useRef, useEffect } from "react";
import { getColorValueArray, getPixelPositionArray } from "../utils";

function Canvas(props) {
  const canvasRef = useRef(null);

  // get all the RGB color combination stored in an array by calling helper function
  const colorValueArray = getColorValueArray();

  // get all the pixel positions stored in an array that need to be filled by calling the helper function
  const pixelPositionArray = getPixelPositionArray();

  const draw = (ctx) => {
    let i = 0;
    //get each unique rgb combination string from colorValueArray;
    while (i < pixelPositionArray.length) {
      const redColor = colorValueArray[i].r;
      const greenColor = colorValueArray[i].g;
      const blueColor = colorValueArray[i].b;

      const xPixelValue = pixelPositionArray[i].x;
      const yPixelValue = pixelPositionArray[i].y;

      ctx.fillStyle =
        "rgb(" + redColor + ", " + greenColor + "," + blueColor + ")";

      //loop through each pixel position and fill each pixel with a different color
      //the size of each color area is 1 X 1;
      ctx.fillRect(xPixelValue, yPixelValue, 1, 1);
      i++;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    // canvas size is set to 256 X 128;
    context.canvas.width = 256;
    context.canvas.height = 128;
    draw(context);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
}

export default Canvas;
