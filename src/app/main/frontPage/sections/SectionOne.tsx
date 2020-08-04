import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {JumbotronTeaser, SideThumbTeaser} from '../../../../@localpkg';

const SectionOne: React.FC = ()=>{
    return(
        <div>
            <Col sm={12} className={'padding-0'}>
                <JumbotronTeaser />
            </Col>
            <Col sm={6} className={'padding-0'}>
                <SideThumbTeaser />
                <SideThumbTeaser />
            </Col>
        </div>
    );
};

export default SectionOne;