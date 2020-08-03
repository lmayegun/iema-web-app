import React from 'react';
import styled from 'styled-components';
import {HeaderBrands} from './index';

interface HeaderWrapperProps {
    className?: string
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = props => {
    return(
        <div className={`navbar-wrapper navbar-fixed-top ${props.className}`}> 
            <HeaderBrands />
        </div>
    )
}

const StyledHeaderWrapper = styled(HeaderWrapper)<HeaderWrapperProps>`
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