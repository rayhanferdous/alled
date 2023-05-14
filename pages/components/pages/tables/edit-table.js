import React from 'react';
import PageHeader from '../../../../shared/layout-components/pageheader/pageHeader';
import { Col, Row, Card } from 'react-bootstrap';
import { BasicEditTable, Savetable } from '../../../../shared/data/pages/tables-data/data-editable';
import Seo from '@/shared/layout-components/seo/seo';

const EditTable = () => {
  return (
  <div >
    <Seo title="Editor-Table"/>

    <PageHeader titles="Editor-Table" active="Editor-Table" items={['Tables']} />
    {/* <!-- Row --> */}
    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Edit Table</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <BasicEditTable />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <div className="row">
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Add New Row with Edit Table</Card.Title>
          </Card.Header>
          <Card.Body>
            <Savetable />
          </Card.Body>
        </Card>
      </Col>
    </div>
    {/* <!-- End Row --> */}
  </div>
);
  };
  EditTable.layout = "Contentlayout";
export default EditTable;
