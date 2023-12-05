import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

function App() {
  const htmContent = "<p>hi bro</p>"; // Convert React element to HTML string
  const reportTemplateRef = useRef(null);

  const handleGeneratePdf = async () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // Adding the fonts
    doc.setFont("Inter-Regular", "normal");

    // Convert HTML string to canvas
    const canvas = await html2canvas(document.getElementById("reportTemplate"));
    const imgData = canvas.toDataURL("image/png");

    // Add image to the PDF
    doc.addImage(imgData, "PNG", 10, 10, 0, 0);

    // Save the PDF
    doc.save("document");
  };

  return (
    <div>
      <div id="reportTemplate" ref={reportTemplateRef}>
        {/* Render your React components here */}
        <p>hi bro</p>
      </div>
      <button className="button" onClick={handleGeneratePdf}>
        Generate PDF
      </button>
    </div>
  );
}

export default App;
