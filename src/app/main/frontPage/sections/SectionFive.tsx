import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {PaneTitle, TitleList, AdsSpace} from 'src/@localpkg';
import { Topic, homepageReducersId } from 'src/app/main/types';
import { getHomepageArticles } from 'src/app/main/frontPage/store/actions';

const selectMostPopular = ( state: any ) => state.homepage.articles.mostPopularState;

const SectionFive: React.FC = ()=>{
    
    const dispatch = useDispatch();
    const mostPopularState = useSelector(selectMostPopular);

    const [mostPopular, setMostPopular] = useState(mostPopularState);

    useEffect(()=>{
        dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.MOST_POPULAR}));
    },[dispatch]);

    useEffect(()=>{
        setMostPopular(mostPopularState);
    },[mostPopularState, setMostPopular])

    if( !mostPopular ){
        return <h1> nothing to see </h1>
    }

    return(
        <div>
            <PaneTitle title={'Most Popular'}/>
            <Row>
                <Col sm={8}>
                    <TitleList width={40} articles={mostPopular}/> 
                </Col>
                <Col sm={4}>
                    <AdsSpace/> 
                </Col>
            </Row>        
        </div>
    );
};

export default SectionFive; 