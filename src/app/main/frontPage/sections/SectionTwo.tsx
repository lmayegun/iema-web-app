import React, {useEffect, useState}  from 'react';
import {Col, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {SideThumbTeaser, CenterThumbTeaser, PaneTitle} from 'src/@localpkg';
import { Topic, homepageReducersId } from 'src/app/main/types';
import { getHomepageArticles } from 'src/app/main/frontPage/store/actions';
import {Article} from 'src/app/main/types';

const sectionTwoFeatureTeasers = ( state: any ) => state.homepage.articles.featuresTeaserState;

const SectionTwo: React.FC = ()=>{
    const dispatch = useDispatch();
    const featuresTeaserState = useSelector(sectionTwoFeatureTeasers);

    const [featuresTeasers, setFeaturesTeasers] = useState(featuresTeaserState);

    useEffect(()=>{
        dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.FEATURES_TEASER}));
        // dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.NEWS_TEASER}));
    },[dispatch]);

    useEffect(()=>{
        setFeaturesTeasers(featuresTeaserState);
    },
    [
     featuresTeaserState, 
     setFeaturesTeasers
    ]);

    if( !featuresTeasers ){
        return <h1> nothing to see </h1>
    }

    return(
        <div>
            <PaneTitle title="Features" />
            <Row>
                <Col sm={6}>
                    {
                        featuresTeasers.map((article: Article, index: number)=>{
                            return(
                                <SideThumbTeaser 
                                    key={index}
                                    showSummary
                                    article={article}
                                />
                            );
                        })
                    }
                </Col>
                <Col sm={6} className={'padding-0 text-center'}>
                    <CenterThumbTeaser overlapContent={true}/>
                </Col>
            </Row>
        </div>
    );
};

export default SectionTwo;



