import React from 'react';
import styled from 'styled-components';

const AdsSpace: React.FC = ()=>{
  return(
    <AdsSpaceStyled>
      <img 
        src={"https://assets.adnuntius.com/XiUF7ismThYbNsg7oQwS4LcYwcy5SQ7XL7VCmKfJNMs.png"}
        alt={"ads space"}
        className={"img-responsive"}
      />
    </AdsSpaceStyled>
  )
}

const AdsSpaceStyled = styled.div`
  max-width: 350px;
  margin: auto;
`;

export default AdsSpace; 