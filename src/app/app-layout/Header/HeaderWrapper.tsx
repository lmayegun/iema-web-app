import React from 'react';
import styled from 'styled-components';
import {HeaderBrands, HeaderNavigation} from './index';

interface HeaderWrapperProps {
    className?: string
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = props => {
    return(
        <div className={`navbar-wrapper navbar-fixed-top pl-0 pr-0 container ${props.className}`}>
            <HeaderBrands />
            <HeaderNavigation />
        </div>
    )
}

const StyledHeaderWrapper = styled(HeaderWrapper)<HeaderWrapperProps>`
    padding-top:20px;
    position: fixed;
    background: white;
    z-index: 999;

    #logobar{
        border-bottom: 1px solid #8a8a8a;
        padding-bottom: 4px;
        margin-bottom: 14px;
    }

    @media only screen and (max-width: 900px) {
        .md-down-hide{
            background: blue;
            display: none;
        }
    }
`;

export default StyledHeaderWrapper;