import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import {IemaLogo, TransformLogo, SearchInput} from '../shared-components';

const HeaderBrands: React.FC = ()=>{
    return(
        <HeaderBrandsStyled>
            <header id={'logobar'} className={'header-brand'}> 
                <nav className={'navbar navbar container navbar-default'} role={'navigation'}>
                <div className={'navbar-header'}>
                <Row>
                    <Col md={4} className={'md-down-hide'}><IemaLogo /></Col>
                    <Col md={4}><TransformLogo /></Col>
                    <Col md={4}><SearchInput /></Col>
                </Row>
                </div>
                </nav>
            </header>
        </HeaderBrandsStyled>
    );
};

const HeaderBrandsStyled = styled.div`
    #logobar{
        border-bottom: 1px solid #8a8a8a;
        padding-bottom: 4px;
        margin-bottom: 14px;
    }
    .navbar{
        &.container{
            max-width: 100%;
            margin: 0px;
            .navbar-header{
                width:100%;
            }
        }
    }
`;

export default HeaderBrands;