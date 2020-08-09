import React from 'react';
import styled from 'styled-components';

const SearchInput: React.FC = ()=>{
  return(
    <SearchInputStyled>
      <div className={'search'}></div>
    </SearchInputStyled>
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
  }
`;

export default SearchInput;