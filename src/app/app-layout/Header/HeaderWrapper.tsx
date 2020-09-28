import React from 'react';
import styled from 'styled-components';
import {Navbar} from 'react-bootstrap'; 

import {HeaderBrands, HeaderNavigation} from './index';

interface HeaderWrapperProps {
    className?: string
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = props => {
    return(
        <Navbar fixed="top" className={`navbar-wrapper navbar-fixed-top container ${props.className}`}>
            <HeaderBrands />
            <div className={'hidden-xs hidden-sm hidden-md full-width'}>
                <HeaderNavigation />
            </div>
        </Navbar>
    )
}

const StyledHeaderWrapper = styled(HeaderWrapper)<HeaderWrapperProps>`
    padding-top:30px;
    padding-bottom: 30px;
    background: white;
    z-index: 999;
    display: flex;
    flex-direction: column;
    max-width: 1260px;
`;

export default StyledHeaderWrapper;