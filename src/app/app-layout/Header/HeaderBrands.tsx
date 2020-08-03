import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {IemaLogo, TransformLogo} from '../shared-components';

const HeaderBrands: React.FC = ()=>{
    return(
        <header id={'logobar'} className={'header-brand'}> 
            <Row>
                <Col md={4} className={'md-down-hide'}><IemaLogo /></Col>
                <Col md={4}><TransformLogo /></Col>
                <Col md={4}> 3 of 3</Col>
            </Row>
        </header>
    );
};

export default HeaderBrands;