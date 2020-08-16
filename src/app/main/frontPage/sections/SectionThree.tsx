import React, {useEffect, useState}  from 'react';
import {Col, Row, Jumbotron} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import { CenterThumbTeaser, PaneTitle, TwitterTimeline} from 'src/@localpkg';
import { Topic, homepageReducersId } from 'src/app/main/types';
import { getHomepageArticles } from 'src/app/main/frontPage/store/actions';
import {Article} from 'src/app/main/types';

const sectionPromotedTeasers = ( state: any ) => state.homepage.articles.promotedTeasersState;

const SectionThree: React.FC = ()=>{

    const dispatch = useDispatch();
    const promotedTeasersState = useSelector(sectionPromotedTeasers);

    const [promotedTeasers, setPromotedTeasers] = useState(promotedTeasersState);

    useEffect(()=>{
        dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.PROMOTED_TEASERS}));
    },[dispatch]);

    useEffect(()=>{
        setPromotedTeasers(promotedTeasersState);
    },
    [
     promotedTeasersState, 
     setPromotedTeasers
    ]);

    if(!promotedTeasers){
        return <h1> no data to show </h1>
    }

    return(
        <div>
            <PaneTitle title="Promoted" />
            <div>
                <Row>
                    {
                        promotedTeasers.map((article: Article, index: number)=>{
                            return(
                                <Col bsPrefix={`padding-0 col-sm-4`} key={index}>
                                    <CenterThumbTeaser 
                                        overlapContent={false}
                                        article={article}
                                    />
                                </Col>
                            )
                        })
                    }
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