import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import {PaneTitle, CenterThumbTeaser, SideThumbTeaser} from 'src/@localpkg';

interface TopicProps {
  match: {
    params:{
      topic: string
    }
  }

}

const Topic: React.FC<TopicProps> = ({match})=>{
  const {topic} = match.params;
  return(
    <TopicStyled>
      <Row>
        <Col md={12}>
          <PaneTitle title={topic}/>
          <div className={'row top'}>
            {/* <Col md={4} className={'content'}>
              <CenterThumbTeaser overlapContent={false}/>
            </Col>
            <Col md={4} className={'content'}>
              <CenterThumbTeaser overlapContent={false}/>
            </Col>
            <Col md={4} className={'content'}>
              <CenterThumbTeaser overlapContent={false}/>
            </Col> */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <div  className={'first-region-side-teaser'}>
            <div>
              <SideThumbTeaser className={'teaser'}/>
            </div>
            <div>
              <SideThumbTeaser className={'teaser'}/>
            </div>
            <div>
              <SideThumbTeaser className={'teaser'}/>
            </div>
            <div>
              <SideThumbTeaser className={'teaser'}/>
            </div>
            <div>
              <SideThumbTeaser className={'teaser'}/>
            </div>
            <div>
              <SideThumbTeaser className={'teaser'}/>
            </div>
          </div>
        </Col>
      </Row>
    </TopicStyled>
  );
};

const TopicStyled = styled.div`
  .row{
    &.top{
      .content{
        padding: 0px;
      }
    }
  }

  .first-region-side-teaser{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    >div{
      flex: 1 1 400px;
      max-width: 400px; 
      margin-right:-15px;
    }
  }
`;

export default Topic; 