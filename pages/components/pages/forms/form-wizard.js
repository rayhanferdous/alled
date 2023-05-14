import React from 'react';
import PageHeader from '../../../../shared/layout-components/pageheader/pageHeader';
import { Row, Col, Card } from 'react-bootstrap';
import BasicFormWizard, { BasicContent, BasicContentFormWizard, ValidationForm, VerticalOrientationWizard } from '../../../../shared/data/pages/forms/data-form-wizard';
import Seo from '@/shared/layout-components/seo/seo';

const FormWizard = () => {

  return (

  <div >
    <Seo title="Form-Wizard"/>
    <PageHeader titles="Form-Wizard" active="Form-Wizard" items={['Forms']} />
    {/* <!--Row open--> */}
    <Row>
      <Col>
        <Card>
          <Card.Header className="border-bottom-0">
            <Card.Title as='h3'>Form Wizard</Card.Title>
          </Card.Header>
          <Card.Body>
          <BasicContent /> 

          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!--row closed--> */}

    {/* <!--row open--> */}
    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header className="border-bottom-0">
            <Card.Title as='h3'>Accordion-Wizard-Form</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicFormWizard />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!--row closed--> */}
    {/* <!-- Row --> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header className="border-bottom-0">
            <Card.Title>
              Basic Content Wizard
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicContentFormWizard />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!--/Row --> */}

    {/* <!--Row --> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header className="border-bottom-0">
            <Card.Title>
              Basic Wizard With Validation
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <ValidationForm />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!--/Row--> */}

    {/* <!--Row--> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header className="border-bottom-0">
            <Card.Title>
              Vertical Orientation Wizard
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <VerticalOrientationWizard />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- /Row --> */}
  </div>
  
);
  };
  FormWizard.layout = "Contentlayout";
export default FormWizard;
