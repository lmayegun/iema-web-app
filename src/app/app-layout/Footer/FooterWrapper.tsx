import React from 'react';
import styled from 'styled-components';

import {FooterMenus} from 'src/app/app-layout/Footer';

const FooterWrapper: React.FC = ()=>{
  return(
    <FooterWrapperStyled>
      <FooterMenus/>
    </FooterWrapperStyled> 
  );
};

const FooterWrapperStyled = styled.footer`
  padding-top: 0;
  margin-top: 0;
`;


export default FooterWrapper;