import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {SideThumbTeaser, PaneTitle} from 'src/@localpkg';

const SectionSeven: React.FC = ()=>{
  return(
    <>
      <PaneTitle title={'IEMA News'}/>
      <Row>
        <Col md={6}><SideThumbTeaser /></Col>
        <Col md={6}><SideThumbTeaser /></Col>
        <Col md={6}><SideThumbTeaser /></Col>
        <Col md={6}><SideThumbTeaser /></Col>
        <Col md={6}><SideThumbTeaser /></Col>
        <Col md={6}><SideThumbTeaser /></Col>
      </Row>
    </>
  );
};

export default SectionSeven; 