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
  const {title, category, description, body, author, publishedOn, tags, urlToImage } = article
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

function bodyMarkup(){
  return {
    __html: `<p>The researchers forecast that, even with some lockdown measures staying in place to the end of 2021, global temperatures will only be around 0.01°C lower than expected by 2030.</p>
    <p>However, the international <a href="https://www.nature.com/articles/s41558-020-0883-0">study</a>, led by the University of Leeds, also found that economic recovery plans with strong green stimuli and climate policies could prevent more than half of the additional warming expected by 2050.</p>
    <p>This would provide a good chance of global temperatures staying below the Paris Agreement’s aspirational 1.5˚C target, according to the researchers, avoiding 0.3˚C of extra warming and the associated severe impacts and risks.</p>
    <p>“The choices made now could give us a strong chance of avoiding 0.3˚C of additional warming by mid-century,” said study lead author professor Piers Forster. “This could mean the difference between success and failure when it comes to avoiding dangerous climate change.</p>
    <p>“The study also highlights the opportunities in lowering traffic pollution by encouraging low-emissions vehicles, public transport and cycle lanes. The better air quality will immediately have important health effects – and it will immediately start cooling the climate.”</p>
    <p>The researchers analysed new global mobility data from Google and Apple, and calculated how 10 different greenhouse gases and air pollutants changed between February and June 2020 in 123 countries.&nbsp;</p>
    <p>The findings reveal that emissions fell by 10-30% globally due to&nbsp;massive behavioural shifts,&nbsp;such as fewer drivers&nbsp;on roads&nbsp;during lockdowns, but that&nbsp;the impact on temperatures is likely to be tiny because current confinement measures are only temporary.</p>
    <p>The researchers also modelled options for post-lockdown recovery, showing that the current situation provides a unique opportunity to implement a structural economic change that could help deliver net-zero emissions.</p>
    <p>“The decisions we make this year about how to recover from this crisis can put us on a solid track to meet the Paris Agreement,” said study co-author Joeri Rogelj from the Grantham Institute – Climate Change and the Environment at Imperial College London.</p>
    <p>“Out of this tragedy comes an opportunity, but unless it is seized a more polluting next decade is not excluded.”</p>
    <p>&nbsp;</p>
    <p><em>Image credit: iStock</em></p>`
  }
};

export default ArticleContent; 

