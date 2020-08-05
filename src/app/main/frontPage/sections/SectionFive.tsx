import React from 'react'; 
import {Col, Row} from 'react-bootstrap';

import {PaneTitle, TitleList} from '../../../../@localpkg';

const SectionFive: React.FC = ()=>{
    return(
        <div>
            <PaneTitle title={'Most Popular'}/>
            <Row>
                <Col sm={9}>
                    <TitleList width={40}/> 
                </Col>
                <Col sm={3}>
 
                </Col>
            </Row>        
        </div>
    );
};

export default SectionFive; 