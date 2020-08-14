import React, { useRef, useEffect } from "react";
import { getColorValueArray, getPixelPositionArray } from "../utils";

function Canvas(props) {
  const canvasRef = useRef(null);

  const colorValueArray = getColorValueArray();
  const pixelPositionArray = getPixelPositionArray();

  const draw = (ctx) => {
    let i = 0;
    while (i < pixelPositionArray.length) {
      const redColor = colorValueArray[i].r;
      const greenColor = colorValueArray[i].g;
      const blueColor = colorValueArray[i].b;

      const xPixelValue = pixelPositionArray[i].x;
      const yPixelValue = pixelPositionArray[i].y;

      ctx.fillStyle =
        "rgb(" + redColor + ", " + greenColor + "," + blueColor + ")";
      ctx.fillRect(xPixelValue, yPixelValue, 1, 1);
      i++;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
}

export default Canvas;
