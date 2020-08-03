import React from 'react';
import {Row, Col} from 'react-bootstrap';

const HeaderBrands: React.FC = ()=>{
    return(
        <header id={'logobar'} className={'header-brand'}> 
            <Row>
                <Col md={4} className={'notlost'}>1 of 3</Col>
                <Col md={4}>2 of 3</Col>
                <Col md={4}> 3 of 3</Col>
            </Row>
        </header>
    );
};

export default HeaderBrands;