import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {JumbotronTeaser, SideThumbTeaser, PaneTitle, AdsSpace} from 'src/@localpkg';
import { Topic, homepageReducersId } from 'src/app/main/types';
import { getHomepageArticles } from 'src/app/main/frontPage/store/actions';
import {Article} from 'src/app/main/types';

const SectionOne: React.FC = ()=>{
    const sectionOneNewsJumbotron = ( state: any ) => state.homepage.articles.newsJumbotronState;
    const sectionOneNewsTeasers = ( state: any ) => state.homepage.articles.newsTeaserState;
    
    const dispatch = useDispatch();
    const jumbotronArticleState = useSelector(sectionOneNewsJumbotron);
    const newsTeaserState = useSelector(sectionOneNewsTeasers);

    const [jumbotronArticle, setJumbotronArticle] = useState(jumbotronArticleState)
    const [newsTeasers, setNewsTeasers] = useState(newsTeaserState);

    useEffect(()=>{
        dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.NEWS_JUMBOTRON}));
        dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.NEWS_TEASER}));
    },[dispatch]);

    useEffect(()=>{
        setJumbotronArticle(jumbotronArticleState);
        setNewsTeasers(newsTeaserState);
    },
    [
     jumbotronArticleState,
     newsTeaserState, 
     setJumbotronArticle, 
     setNewsTeasers
    ]);
    

    if( !jumbotronArticle || !newsTeasers ){
        return <h1> nothing to see </h1>
    }

    return(
        <div>
            <PaneTitle title="News" />
            <Col sm={12} className={'padding-0'}>
                <JumbotronTeaser article={jumbotronArticle} />
            </Col>
            <Row>
                <Col sm={6}>
                    {
                        newsTeasers.map((article: Article, index: number)=>{
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
                <Col sm={6} className={'text-center'}>
                    <AdsSpace/>
                </Col>
            </Row>
        </div>
    );
};

export default SectionOne;