import React, {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import {RouteComponentProps} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {ArticleContent, MagazineSlider, PaneTitle, TitleList} from 'src/@localpkg';
import { getArticle } from 'src/app/main/article/store/actions';
import articleReducer from 'src/app/main/article/store/reducers/index';
import withReducer from 'src/app/store/withReducer';

const selectArticle = ( state: any ) => state.articleData.article.articleState;

const ArticlePage: React.FC<RouteComponentProps> = (props)=>{

  const id = props.match.url.split('/')[2];

  const articleState = useSelector(selectArticle);
  const dispatch = useDispatch();

  const [article, setArticle] = useState(articleState)

  useEffect(()=>{
    dispatch( getArticle({id:id}) );
  },[dispatch, id]);

  useEffect(()=>{
    setArticle(articleState);
  },[articleState, setArticle]);

  if(!article){
    return <h1> no content </h1>
  };

  return(
    <ArticleStyled>
      <Row>
        <Col md={8}>
          <ArticleContent article={article} />
        </Col>
        <Col md={4}>
          <div className={'most-popular'}>
            <PaneTitle title={'Most Popular'}/>
            <TitleList/> 
          </div>
        </Col>
        <Col md={12}>
          <PaneTitle title={'The Magazine'}/>
          <MagazineSlider />
        </Col>
      </Row>
    </ArticleStyled>
  );
};

const ArticleStyled = styled.div`
  .most-popular{
    margin-top: 25px;
  }
`;

export default withReducer('articleData', articleReducer)(ArticlePage);