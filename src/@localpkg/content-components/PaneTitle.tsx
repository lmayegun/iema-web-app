import React from 'react';
import styled from 'styled-components';
import {Col} from 'react-bootstrap';

interface PaneTitleProps {
    className?: string;
    title: string;
    fontSize?: string;
    color?: string;
}

interface Wrapper{
    color: string | undefined;
    fontSize: string | undefined;  
}

const PaneTitle: React.FC<PaneTitleProps> = ({title, fontSize, color})=>{

    return(
        <Col bsPrefix={`padding-0 sm-12`}>
            <PaneTitleStyled fontSize={fontSize} color={color}>
                {title}
            </PaneTitleStyled>
        </Col>
    );
};

const PaneTitleStyled = styled.div <Wrapper>`
    border-bottom: 2px solid;
    padding-bottom: 0px;
    font-family: 'MuseoSlab-300',Helvetica,Arial,sans-serif;
    font-size: ${ ({fontSize}) => {
        if(fontSize === undefined || fontSize?.length < 1){
            return '50px';   
        }
        return fontSize
    }};
    color: ${ ({color}) => {
        if(color === undefined || color?.length < 1){
            return '#000';   
        }
        return color;
    }};
    margin-bottom: 15px;
`;

export default PaneTitle;

