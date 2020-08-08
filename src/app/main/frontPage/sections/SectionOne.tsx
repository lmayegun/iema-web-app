import React, {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {JumbotronTeaser, SideThumbTeaser, PaneTitle} from 'src/@localpkg';
import { Topic, homepageReducersId } from 'src/app/main/types';
import { getHomepageArticles } from 'src/app/main/frontPage/store/actions';
import homepageReducer from 'src/app/main/frontPage/store/reducers/index';
import withReducer from 'src/app/store/withReducer';

const selectArticles = ( state: any ) => state.homepage.articles;

const SectionOne: React.FC = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.NEWS_JUMBOTRON}));
        dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.NEWS_TEASER}));
    },[dispatch])

    const articles = useSelector(selectArticles);
    console.log('moi', articles);

    return(
        <div>
            <PaneTitle title="News" />
            <Col sm={12} className={'padding-0'}>
                <JumbotronTeaser />
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

export default withReducer('homepage', homepageReducer)(SectionOne);