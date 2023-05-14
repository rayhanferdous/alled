import React, { useState } from 'react';
import PageHeader from '../../../../shared/layout-components/pageheader/pageHeader';
import { Card, Col, Row, Modal, Button } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import Seo from '@/shared/layout-components/seo/seo';
const Editors = dynamic(() => import("@/shared/data/pages/editor"), {ssr: false,});

const FormEditor = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div >
      <Seo title="Form Editor"/>
      <PageHeader titles="Form Editor" active="Form Editor" items={['Forms']} />
      {/* <!-- Row --> */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Sun Form Editor</Card.Title>
            </Card.Header>
            <Card.Body>
            <Editors/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End Row--> */}

      {/* <!-- Row --> */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                Form Editor in Modal
              </Card.Title>
            </Card.Header>
            <Card.Body>
              {/* <!-- pd-y-30 --> */}
              <div className="text-center p-4 bg-light border">
                <Button variant="primary" onClick={handleShow}>
                  View live demo
                </Button>
                <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Create New Document</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Editors/>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /Row --> */}

    </div>
  );
};
FormEditor.layout = "Contentlayout";
export default FormEditor;
