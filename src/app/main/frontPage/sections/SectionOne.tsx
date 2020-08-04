import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {JumbotronTeaser, SideThumbTeaser, PaneTitle} from '../../../../@localpkg';

const SectionOne: React.FC = ()=>{
    return(
        <div>
            <PaneTitle title="News" />
            <Col sm={12} className={'padding-0'}>
                <JumbotronTeaser />
            </Col>
            <Row>
                <Col sm={6}>
                    <SideThumbTeaser />
                    <SideThumbTeaser />
                </Col>
                <Col sm={6} className={'padding-0 text-center'}>
                    Ad Board 
                </Col>
            </Row>
        </div>
    );
};

export default SectionOne;