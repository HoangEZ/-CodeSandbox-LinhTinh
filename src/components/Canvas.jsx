import { memo } from "react";

const Canvas = (props) => {
  if (props.imageUrl) {
    const image = document.createElement("img");
    image.src = props.imageUrl;
    image.addEventListener("load", () => {
      // const canvas = document.createElement("canvas");
      const canvas = document.getElementById("buffer");
      const ctx = canvas.getContext("2d");
      const sWidth = image.width;
      const sHeight = image.height;
      const dWidth = 500;
      const dHeight = (dWidth * sHeight) / sWidth;
      canvas.width = dWidth;
      canvas.height = dHeight;
      ctx.drawImage(image, 0, 0, sWidth, sHeight, 0, 0, dWidth, dHeight);
      const imageData = ctx.getImageData(0, 0, dWidth, dHeight);
      const colors = imageData.data;
      for (let i = 0; i < colors.length; i += 4) {
        const r = colors[i];
        const g = colors[i + 1];
        const b = colors[i + 2];
        const avg = 0.21 * r + 0.72 * g + 0.07 * b;
        imageData[i] = imageData[i + 1] = imageData[i + 2] = avg;
        console.log(avg);
      }
      ctx.putImageData(imageData, 0, 0);
    });
  }
  return <canvas id="buffer"></canvas>;
};
export default memo(Canvas);
