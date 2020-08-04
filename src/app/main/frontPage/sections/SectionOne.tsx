import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {JumbotronTeaser} from '../../../../@localpkg';

const SectionOne: React.FC = ()=>{
    return(
        <div>
            <Col sm={12} className={'padding-0'}>
                <JumbotronTeaser />
            </Col>
            <Col sm={12} className={'padding-0'}>
                shhs
            </Col>
        </div>
    );
};

export default SectionOne;