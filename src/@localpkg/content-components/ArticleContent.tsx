import React from 'react';
import styled from 'styled-components';
import {Tags, Date} from 'src/@localpkg';

import { Article } from 'src/app/main/types';

interface ArticleContentProps{
  article: Article;
};

const ArticleContent: React.FC<ArticleContentProps> = ({article})=>{
  if(!article){
    return <h4> no article to show</h4>
  }
  const {title, category, description, body, publishedOn, tags, urlToImage } = article
  return(
    <ArticleContentStyled>
      <div className={'taxonomy-wrapper'}>
        <div className={'content-type'}> {category} | </div> <Tags tags={tags}/> 
      </div>

      <div className={'page-header'}>
        <h1>
          {title}
        </h1>
      </div>

      <div className={'date'}>
        <Date date={publishedOn}/>
      </div>

      <div className={'summary'}>
        <p dangerouslySetInnerHTML={{__html: description }}/>
      </div>

      <div className={'hero-image-wrapper'}>
        <img 
          src={urlToImage} 
          alt='hero'
          className={'img-responsive'}
        /> 
      </div>

      <div dangerouslySetInnerHTML={{__html:body}}/>

    </ArticleContentStyled>
  );
};

const ArticleContentStyled = styled.div`
  .taxonomy-wrapper{
    .content-type{ 
      float: left; 
      margin-right: 10px; 
    }
  }

  .page-header{
    h1{
      font: 30px 'MuseoSlab-700',Helvetica,Arial,sans-serif;
      border-bottom: 0;
      border-top: 2px solid #000;
      padding-top: 36px;
      margin-top: 16px;
    }
  }

  .date{ margin-bottom: 40px;}

  .summary{
    margin-bottom: 40px;
    p{font:14px/1.5 'MuseoSans-300',Helvetica,Arial,sans-serif}
  }

  .hero-image-wrapper{
    margin-bottom: 40px;
  }
`;

export default ArticleContent; 

