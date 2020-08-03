import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

interface HeaderWrapperProps {
    className?: string
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = props => {
    return(
        <div className={props.className}> 
            <Row>
                <Col md={4} className={'notlost'}>1 of 3</Col>
                <Col md={4}>2 of 3</Col>
                <Col md={4}> 3 of 3</Col>
            </Row>
        </div>
    )
}

const StyledHeaderWrapper = styled(HeaderWrapper)<HeaderWrapperProps>`
    background: red;
    @media only screen and (max-width: 900px) {
        .notlost{
            background: blue;
            display: none;
        }
    }
`;

export default StyledHeaderWrapper;