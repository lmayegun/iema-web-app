import React, {useState} from 'react';
import styled from 'styled-components';
import {Collapse} from 'react-bootstrap';
import {useDispatch} from 'react-redux';

import {AppContextConsumer} from 'src/app/AppContext';
import { getSearchedArticles } from 'src/app/main/pages/store/actions';

const SearchInput: React.FC = ()=>{
  const [open, setOpen] = useState(false);
  const [userSearch, setUserSearch] = useState('');

  const dispatch = useDispatch();

  return(
    <AppContextConsumer>
      {
        (context)=>{
          console.log(context?.searchText, 'context')
          return(
            <SearchInputStyled>
              <div onClick={() => setOpen(!open)} className={'search'}></div>
              <Collapse in={open}>
                <div className="collapse-text">
                  <input 
                    className="form-control form-text" 
                    type="text" 
                    id="edit-search-api-views-fulltext" 
                    name="search_api_views_fulltext" 
                    value={context?.searchText} 
                    onChange={(ev)=>{
                      context?.setSearchText(ev.target.value);
                      setUserSearch(ev.target.value);
                    }}
                    onKeyPress={(ev)=>{
                      if( ev.key === 'Enter' ){
                        dispatch(getSearchedArticles({searchText: userSearch}))
                      }
                    }}
                    style={{"display": "inline-block"}}
                  />
                </div>
              </Collapse>
            </SearchInputStyled>
          )
        }
      }
    </AppContextConsumer>
  );
};

const SearchInputStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  .search{
    background: url(https://transform.iema.net/sites/default/themes/custom/transform/img/magnifier-icon.png) no-repeat 5px 5px;
    position: relative;
    z-index: 2;
    padding-right: 0;
    height: 30px;
    width: 30px;
    float: right;
    cursor: pointer;
  }
  .collapse-text{
    position: absolute;
    top: 16px;
    right: 0;
    z-index: 1;
  }
`;

export default SearchInput;