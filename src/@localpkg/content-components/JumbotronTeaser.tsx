import React from 'react';
import {Jumbotron, Row, Col} from 'react-bootstrap'; 

const JumbotronTeaser: React.FC = ()=>{
    return(
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
                    gsgg
                </Col>
            </Row>
        </Jumbotron>
    );
};

export default React.memo(JumbotronTeaser); 