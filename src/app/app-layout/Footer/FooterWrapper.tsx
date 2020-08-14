import React from 'react';
import styled from 'styled-components';

import {FooterMenus, FooterTopRow} from 'src/app/app-layout/Footer';

const FooterWrapper: React.FC = ()=>{
  return(
    <FooterWrapperStyled>
      <FooterTopRow/>
      <FooterMenus/>
    </FooterWrapperStyled> 
  );
};

const FooterWrapperStyled = styled.footer`
  padding-top: 0;
  margin-top: 0;
`;


export default FooterWrapper;