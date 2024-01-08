// pages/index.js
// pages/index.js
import React from 'react';
import PDFViewer from './view';

const PdfPage = () => {
  const pdfUrl = 'https://res.cloudinary.com/dm3wjnhkv/image/upload/v1703831627/thelifescript/dyz9gggtcx4aju0dhn8k.pdf';

  return (
    <div>
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default PdfPage;

