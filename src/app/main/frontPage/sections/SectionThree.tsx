import React from 'react';
import {Col, Row} from 'react-bootstrap';

import { CenterThumbTeaser, PaneTitle} from '../../../../@localpkg';

const SectionThree: React.FC = ()=>{
    return(
        <div>
            <PaneTitle title="Promoted" />
            <div>
                <Row>
                    <Col bsPrefix={`padding-0 col-sm-4`}>
                        <CenterThumbTeaser overlapContent={false}/>
                    </Col>
                    <Col bsPrefix={`padding-0 col-sm-4`}>
                        <CenterThumbTeaser overlapContent={false}/>
                    </Col>
                    <Col bsPrefix={`padding-0 col-sm-4`}>
                        <CenterThumbTeaser overlapContent={false}/>
                    </Col>
                </Row>
            </div>

            <Row>
                Magic Stick 
            </Row>
        </div>
    );
};

export default SectionThree;