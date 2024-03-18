import { useEffect, useRef } from "react";
import { fabric } from "fabric";

const FabricCanvas = ({ imageSrc, title, author }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);

    // Calculate A5 dimensions (210mm x 148mm) at 96 DPI (standard web resolution)
    const a5Width = 210 * 4;
    const a5Height = 148 * 4;

    // Set canvas size to A5 dimensions
    canvas.setDimensions({ width: a5Width, height: a5Height });

    // Add background rectangle
    const background = new fabric.Rect({
      left: 0,
      top: 0,
      width: a5Width,
      height: a5Height,
      fill: "#eee", // Set your desired background color or image
      selectable: false, // Make it non-selectable
    });
    canvas.add(background);

    fabric.Image.fromURL(imageSrc, (img) => {
      // Set image properties to center it within the canvas
      img.set({
        left: a5Width / 2,
        top: a5Height / 2,
        originX: "center",
        originY: "center",
        scaleX: a5Width / img.width,
        scaleY: a5Height / img.height,
      });

      canvas.add(img);

      // Add title and author text after adding the image
      const titleText = new fabric.Text(title, {
        left: a5Width / 2,
        top: a5Height / 4, // Adjust the top position as needed
        fontSize: 20,
        fill: "#000", // Set the text color
        originX: "center", // Center the text horizontally
        selectable: false, // Make it non-selectable
      });
      canvas.add(titleText);

      const authorText = new fabric.Text(author, {
        left: a5Width / 2,
        top: (a5Height * 3) / 4, // Adjust the top position as needed
        fontSize: 16,
        fill: "#000", // Set the text color
        originX: "center", // Center the text horizontally
        selectable: false, // Make it non-selectable
      });
      canvas.add(authorText);
    });
  }, [imageSrc, title, author]);

  return <canvas ref={canvasRef} />;
};

export default FabricCanvas;
