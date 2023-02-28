import React, {useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import pdf from "../assets/STEVEN_MCCOMBE_RESUME2023.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const resumeLink =
  "https://raw.githubusercontent.com/Steven-McCombe/portfoliosteven/master/src/components/assets/STEVEN_MCCOMBE_RESUME2023.pdf";

export default function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}