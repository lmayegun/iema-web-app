import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import {ArticleContent, MagazineSlider, PaneTitle, TitleList} from 'src/@localpkg';

const Article: React.FC = ()=>{
  return(
    <ArticleStyled>
      <Row>
        <Col md={8}>
          <ArticleContent />
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

export default Article;