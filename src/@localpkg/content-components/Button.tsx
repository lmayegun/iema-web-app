import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'

interface IemaBtnProps {
  title: string;
  color?: string;
  variant?: string; 
}

interface StyledWrapper {
  padding?: string;
  margin?: string;
}

const IemaButton: React.FC<IemaBtnProps> = ({title, variant})=>{
  return(
    <IemaButtonStyled>
      <Button variant={variant} size="lg">
        {title}
      </Button>
    </IemaButtonStyled>
  );
}

const IemaButtonStyled = styled.div <StyledWrapper>`
  button{
    width: 100%;
    padding: ${ ({padding})=> {
      if(padding === undefined || padding?.length < 1){
        return '10px';
      }
      return padding;
    }};
    margin: ${ ({margin})=> {
      if(margin === undefined || margin?.length < 1){
        return '0 0 10px 0';
      }
      return margin;
    }};
  }
`;

export default IemaButton