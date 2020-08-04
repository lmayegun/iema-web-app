import React from 'react';
import {Jumbotron, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import BoxTitleSummary from './BoxTitleSummary';
import Tags from './Tags';

interface JumbotronTeaserProps {
    className?: string;
}

const JumbotronTeaser: React.FC<JumbotronTeaserProps> = (props)=>{
    return(
        <div className={props.className}>
            <Jumbotron>
                <Row>
                    <Col md={7}>
                        <img 
                            src={`https://transform.iema.net/sites/default/files/styles/new_hero_image_720_x_460/public/s3/hero/water-vole-by-philip-braude.jpg?itok=ADwDejDH`} 
                            alt={``}
                            className={`img-responsive`}
                        />
                    </Col>
                    <Col md={5}>
                        <div className={`jumbotron-content text-center`}>
                            <BoxTitleSummary>
                                <h3> Quarter of UK's native mammals now at risk of extinction </h3>
                                <p> Almost a quarter of Britain's native mammals are now at “imminent risk” of extinction, according to the Mammal Society's first official endangered list. </p>
                                <Tags />
                            </BoxTitleSummary>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

const JumbotronTeaserStyled = styled(JumbotronTeaser)`
    .jumbotron-content{
        margin-top: 120px;
        margin-left: -120px;
        max-width: 100%;
        min-height: 220px;
        background: white;
        padding: 36px 20px 20px;
    }
`;

export default React.memo(JumbotronTeaserStyled); 