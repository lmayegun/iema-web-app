import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {JumbotronTeaser, SideThumbTeaser, PaneTitle} from 'src/@localpkg';
import { Topic, homepageReducersId } from 'src/app/main/types';
import { getHomepageArticles } from 'src/app/main/frontPage/store/actions';
import {Article} from 'src/app/main/types';

const selectArticles = ( state: any ) => state.homepage.articles.knowledgeJumbotronState;
const sectionOneKnowledgeTeasers = ( state: any ) => state.homepage.articles.knowledgeTeaserState;

const SectionFour: React.FC = ()=>{
    const dispatch = useDispatch();
    const jumbotronArticleState = useSelector(selectArticles);
    const knowledgeTeaserState = useSelector(sectionOneKnowledgeTeasers);

    const [jumbotronArticle, setJumbotronArticle] = useState(jumbotronArticleState);
    const [knowledgeTeasers, setKnowledgeTeasers] = useState(knowledgeTeaserState);

    useEffect(()=>{
        dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.KNOWLEDGE_JUMBOTRON}));
        dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.KNOWLEDGE_TEASER}));
    },[dispatch]);

    useEffect(()=>{
        setJumbotronArticle(jumbotronArticleState);
        setKnowledgeTeasers(knowledgeTeaserState);
    },[jumbotronArticleState, knowledgeTeaserState, setJumbotronArticle, setKnowledgeTeasers])

    if( !jumbotronArticle || !knowledgeTeasers ){
        return <h1> nothing to see </h1>
    }

    return(
        <div>
            <PaneTitle title="Knowledge" />
            <Col sm={12} className={'padding-0'}>
                <JumbotronTeaser article={jumbotronArticle} />
            </Col>
            <Row>
                <Col sm={6}>
                    {
                        knowledgeTeasers.map((article: Article, index: number)=>{
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
                    Ad Board 
                </Col>
            </Row>
        </div>
    );
};

export default SectionFour;