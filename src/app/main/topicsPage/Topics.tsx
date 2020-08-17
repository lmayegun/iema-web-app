import React, {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { PaneTitle, CenterThumbTeaser, SideThumbTeaser } from 'src/@localpkg';
import { getTopicsTopRegion } from 'src/app/main/topicsPage/store/actions';
import { Article } from 'src/app/main/types';
import withReducer from 'src/app/store/withReducer';
import topicsReducer from 'src/app/main/topicsPage/store/reducers'

const selectTopicTopRegion = ( state: any ) => state.topicsData.articles.topicsTopRegionState;

const Topics: React.FC<RouteComponentProps> = ( props )=>{

  const topic = props.match.url.split('/')[2];

  const dispatch = useDispatch();
  const topicTopRegionState = useSelector(selectTopicTopRegion);

  const [topicTopRegion, setTopicTopRegion] = useState(topicTopRegionState);

  useEffect(()=>{
    dispatch(getTopicsTopRegion({topic:topic}));
  },[dispatch, topic]);

  useEffect(()=>{
    setTopicTopRegion(topicTopRegionState);
  },[topicTopRegionState, setTopicTopRegion]);

  if(!topicTopRegion){
    return <h1> no data to show </h1>
  }

  return(
    <TopicsStyled>
      <Row>
        <Col md={12}>
          <PaneTitle title={topic}/>
          <div className={'row top'}>
            {
              topicTopRegion.map((article: Article, index: number)=>{
                return(
                  <Col md={4} className={'content'} key={index}>
                    <CenterThumbTeaser 
                      overlapContent={false}
                      article={article}
                    />
                  </Col>
                );
              })
            }
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
    </TopicsStyled>
  );
};

const TopicsStyled = styled.div`
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

export default withReducer('topicsData', topicsReducer)(Topics); 