import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export default function SinglePage(props) {
  const { pdf } = props;
  return (
    <>
      <Document file={pdf}>
        <Page  pageNumber={1} />
      </Document>
    </>
  );
}
