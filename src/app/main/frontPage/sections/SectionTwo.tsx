import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {SideThumbTeaser, CenterThumbTeaser, PaneTitle} from '../../../../@localpkg';

const SectionTwo: React.FC = ()=>{
    return(
        <div>
            <PaneTitle title="Features" />
            <Row>
                <Col sm={6}>
                    <SideThumbTeaser />
                    <SideThumbTeaser />
                    <SideThumbTeaser />
                </Col>
                <Col sm={6} className={'padding-0 text-center'}>
                    <CenterThumbTeaser />
                </Col>
            </Row>
        </div>
    );
};

export default SectionTwo;



