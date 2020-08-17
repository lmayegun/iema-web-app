import React, {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { PaneTitle, CenterThumbTeaser, SideThumbTeaser } from 'src/@localpkg';
import { getTagsTopRegion, getTagsSecondRegion } from 'src/app/main/topicsPage/store/actions';
import { Article } from 'src/app/main/types';
import withReducer from 'src/app/store/withReducer';
import topicsReducer from 'src/app/main/topicsPage/store/reducers'

const selectTagTopRegion = ( state: any ) => state.topicsData.tags.tagsTopRegionState;
const selectTagSecondRegion = ( state: any ) => state.topicsData.tags.tagsSecondRegionState;

const Topics: React.FC<RouteComponentProps> = ( props )=>{

  const tag = props.match.url.split('/')[3];

  const dispatch = useDispatch();
  const tagTopRegionState = useSelector(selectTagTopRegion);
  const tagSecondRegionState = useSelector(selectTagSecondRegion);

  const [tagTopRegion, setTagTopRegion] = useState(tagTopRegionState);
  const [tagSecondRegion, setTagSecondRegion] = useState(tagSecondRegionState);

  useEffect(()=>{
    dispatch(getTagsTopRegion({tag:tag}));
    dispatch(getTagsSecondRegion({tag:tag}));
  },[dispatch, tag]);

  useEffect(()=>{
    setTagTopRegion(tagTopRegionState);
    setTagSecondRegion( tagSecondRegionState);
  },[
      tagTopRegionState,
      setTagTopRegion,
      tagSecondRegionState,
      setTagSecondRegion
    ]);

  if(!tagTopRegion || !tagSecondRegion){
    return <h1> no data to show </h1>
  }

  return(
    <TopicsStyled>
      <Row>
        <Col md={12}>
          <PaneTitle title={tag}/>
          <div className={'row top'}>
            {
              tagTopRegion.map((article: Article, index: number)=>{
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
            {
              tagSecondRegion.map((article: Article, index: number)=>{
                return(
                  <div key={index}>
                    <SideThumbTeaser 
                      className={'teaser'}
                      article={article}
                    />
                  </div>
                );
              })
            }
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