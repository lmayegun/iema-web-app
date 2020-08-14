import React from 'react';
import {Jumbotron, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import {Article} from 'src/app/main/types';
import BoxTitleSummary from './BoxTitleSummary';
import Tags from './Tags';
import Date from './Date';

type JumbotronTeaserProps = {
    article: Article[];
}

const JumbotronTeaser: React.FC<JumbotronTeaserProps> = ({article})=>{
    if(!article){
        return <h5> not showing</h5>
    }
    const { title, urlToImage} = article[0];
    console.log(title, 'nuisance')
    return(
        <JumbotronTeaserStyled>
            <Jumbotron>
                <Row>
                    <Col md={7}>
                        <img 
                            src={`${urlToImage}`} 
                            alt={``}
                            className={`img-responsive jumbotron-img`}
                        />
                    </Col>
                    <Col md={5}>
                        <div className={`jumbotron-content text-center`}>
                            <BoxTitleSummary>
                                <h3> {title} </h3>
                                <p> Almost a quarter of Britain's native mammals are now at “imminent risk” of extinction, according to the Mammal Society's first official endangered list. </p>
                                <Tags /> <Date />
                            </BoxTitleSummary>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </JumbotronTeaserStyled>
    );
};

const JumbotronTeaserStyled = styled.div`
    .jumbotron-img{
        max-width: 100%;
    }
    .jumbotron-content{
        margin-bottom: 20px;
        max-width: 100%;
        min-height: 220px;
        background: white;
        padding: 36px 20px 20px;
    }

    @media (min-width: 992px){
        .jumbotron-content{
            margin-top: 120px;
            margin-left: -120px;
        }
    }
`;

export default React.memo(JumbotronTeaser); 