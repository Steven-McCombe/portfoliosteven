import React from 'react';
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import File from "../assets/STEVEN_MCCOMBE_RESUME2023.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function Resume() {

  return (
    <div>
        <Row className ="justify-content-center m-3">
          <Button
            variant="light"
            href={File}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            Download Resume
          </Button>
        </Row>
      <Container fluid className=" m-3 mb-0" >
        <Row >
          <Document file= {File} className="d-flex justify-content-center">
            <Page pageNumber={1} />
          </Document>
        </Row>

      </Container>
    </div>
  );
}