import React from 'react';
import styled from 'styled-components';
import {Col} from 'react-bootstrap';

interface PaneTitleProps {
    className?: string;
    title: string;
}

const PaneTitle: React.FC<PaneTitleProps> = (props)=>{
    return(
        <Col bsPrefix={`padding-0 sm-12`}>
            <h2 className={`${props.className}`}>
                {props.title}
            </h2>
        </Col>
    );
};

const PaneTitleStyled = styled(PaneTitle)`
    border-bottom: 2px solid #000;
    padding-bottom: 13px;
    font-family: 'MuseoSlab-300',Helvetica,Arial,sans-serif;
    font-size: 50px;
`;

export default PaneTitleStyled;

