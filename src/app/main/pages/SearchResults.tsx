import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {PaneTitle, SideThumbTeaser} from 'src/@localpkg';
import { getSearchedArticles } from 'src/app/main/pages/store/actions';
import SearchReducer from 'src/app/main/pages/store/reducers';
import withReducer from 'src/app/store/withReducer';
import { Article } from 'src/app/main/types';

const selectSearchResults = ( state: any ) => state.searchData.search.searchResultsState;

const SearchResults: React.FC = ()=>{

  const dispatch = useDispatch();
  const searchResultsState = useSelector(selectSearchResults);

  const [searchResults, setSearchResults] = useState(searchResultsState);

  useEffect(()=>{
    dispatch( getSearchedArticles({searchText:'health'}) );
  },[dispatch]);

  useEffect(()=>{
    setSearchResults(searchResultsState);
  },[searchResultsState, setSearchResults]);

  if(!searchResults || searchResults.length < 1){
    return <h1> no results </h1>
  }

  return(
    <SearchResultsStyled>
      <PaneTitle title={'Search results'}/>
      <Row>
        {
          searchResults.map((article: Article, index: number)=>{
            return(
              <Col md={6} key={index}>
                <SideThumbTeaser 
                  showSummary={true}
                  article={article}
                />
              </Col>
            )
          })
        }
      </Row>
    </SearchResultsStyled>
  );
};

const SearchResultsStyled = styled.div`

`;

export default withReducer('searchData', SearchReducer)(SearchResults); 