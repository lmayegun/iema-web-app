import React from 'react';
import styled from 'styled-components';
import {Col} from 'react-bootstrap';

import {IemaLogo, TransformLogo, SearchInput} from 'src/app/app-layout/shared-components';

const FooterTopRow: React.FC = ()=>{
  return(
    <FooterTopRowStyled>
      <div className={'row footer-top-row'}>
        <Col md={4}> <TransformLogo/> </Col>
        <Col md={4}> Transform </Col>
        <Col md={4}> <IemaLogo /> </Col>
      </div>
    </FooterTopRowStyled>
  );
};

const FooterTopRowStyled = styled.div`
  .footer-top-row{
    padding-bottom: 20px;
    padding-top: 40px;
  }
`;

export default FooterTopRow;