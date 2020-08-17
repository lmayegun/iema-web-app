import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {SideThumbTeaser, PaneTitle} from 'src/@localpkg';
import { Topic, homepageReducersId } from 'src/app/main/types';
import { getHomepageArticles } from 'src/app/main/frontPage/store/actions';
import {Article} from 'src/app/main/types';

const selectIemaNews = ( state: any ) => state.homepage.articles.iemaNewsState;

const SectionSeven: React.FC = ()=>{

  const dispatch = useDispatch();
    const iemaNewsState = useSelector(selectIemaNews);

    const [iemaNews, setIemaNews] = useState(iemaNewsState);

    useEffect(()=>{
        dispatch(getHomepageArticles({topic:Topic.News, reducer: homepageReducersId.IEMA_NEWS}));
    },[dispatch]);

    useEffect(()=>{
        setIemaNews(iemaNewsState);
    },[iemaNewsState, setIemaNews])

    if( !iemaNews ){
        return <h1> nothing to see </h1>
    }
  return(
    <>
      <PaneTitle title={'IEMA News'}/>
      <Row>
        {
          iemaNews.map((article: Article, index: number)=>{
            return(
              <Col md={6} key={index}>
                <SideThumbTeaser 
                  showSummary={true}
                  article={article}
                />
              </Col>
            );
        })
        }
      </Row>
    </>
  );
};

export default SectionSeven; 