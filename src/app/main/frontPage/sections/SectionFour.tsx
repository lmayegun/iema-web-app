import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {JumbotronTeaser, SideThumbTeaser, PaneTitle} from 'src/@localpkg';
import { Topic, homepageReducersId } from 'src/app/main/types';
import { getHomepageArticles } from 'src/app/main/frontPage/store/actions';

const selectArticles = ( state: any ) => state.homepage.articles.newsJumbotronState;

const SectionFour: React.FC = ()=>{
    const dispatch = useDispatch();
    const jumbotronArticleState = useSelector(selectArticles);

    const [jumbotronArticle, setJumbotronArticle] = useState(jumbotronArticleState)

    useEffect(()=>{
        dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.NEWS_JUMBOTRON}));
        dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.NEWS_TEASER}));
    },[dispatch]);

    useEffect(()=>{
        setJumbotronArticle(jumbotronArticleState);
    },[jumbotronArticleState, setJumbotronArticle])

    if( !jumbotronArticle ){
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
                    <SideThumbTeaser />
                    <SideThumbTeaser />
                </Col>
                <Col sm={6} className={'padding-0 text-center'}>
                    Ad Board 
                </Col>
            </Row>
        </div>
    );
};

export default SectionFour;