import React from 'react';
import {Col, Row, Jumbotron} from 'react-bootstrap';

import { CenterThumbTeaser, PaneTitle, TwitterTimeline} from '../../../../@localpkg';
// import { TwitterTimelineEmbed } from 'react-twitter-embed';

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
                <Col sm={12}>
                    <Jumbotron style={{padding:'20px'}}>
                        <Row>
                            <Col sm={4}>
                                Magic Stick 
                            </Col>
                            <Col sm={4}>
                                <TwitterTimeline />
                            </Col>
                            <Col sm={4}>
                                Magic Stick 
                            </Col>
                        </Row>
                    </Jumbotron>
                </Col>
            </Row>
        </div>
    );
};

export default SectionThree;