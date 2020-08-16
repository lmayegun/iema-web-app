import React, {useEffect, useState}  from 'react';
import {Col, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {SideThumbTeaser, CenterThumbTeaser, PaneTitle} from 'src/@localpkg';
import { Topic, homepageReducersId } from 'src/app/main/types';
import { getHomepageArticles } from 'src/app/main/frontPage/store/actions';
import {Article} from 'src/app/main/types';

const sectionTwoFeatureTeasers = ( state: any ) => state.homepage.articles.featuresTeaserState;
const sectionEditorsPick = ( state: any ) => state.homepage.articles.editorsPickState;

const SectionTwo: React.FC = ()=>{
    const dispatch = useDispatch();
    const featuresTeaserState = useSelector(sectionTwoFeatureTeasers);
    const editorsPickState = useSelector(sectionEditorsPick);

    const [featuresTeasers, setFeaturesTeasers] = useState(featuresTeaserState);
    const [editorsPick, setEditorsPick] = useState(editorsPickState);

    useEffect(()=>{
        dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.FEATURES_TEASER}));
        dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.EDITORS_PICK}));
    },[dispatch]);

    useEffect(()=>{
        setFeaturesTeasers(featuresTeaserState);
        setEditorsPick(editorsPickState);
    },
    [
     featuresTeaserState, 
     setFeaturesTeasers,
     editorsPickState,
     setEditorsPick,
    ]);

    if( !featuresTeasers || !editorsPick ){
        return <h1> nothing to see here </h1>
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
                    {
                        editorsPick.map((article: Article, index: number)=>{
                            return(
                                <CenterThumbTeaser 
                                    overlapContent={true}
                                    article={article}
                                />
                            )
                        })
                    }
                </Col>
            </Row>
        </div>
    );
};

export default SectionTwo;



