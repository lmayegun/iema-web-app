import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'; 

const HeaderNavigation: React.FC = ()=>{
    return(
        <HeaderNavigationStyled>
            <header id="navbar" className={'hidden-xs hidden-sm hidden-md navbar container navbar-default'}>
                <div className={'container main'}>
                    <ul className={'links'}>
                        <li className={'first'}><Link to={'/'} className={'orange'}>News</Link></li>
                        <li className={''}><Link to={'/'} className={'sea-blue'}>Management</Link></li>
                        <li className={''}><Link to={'/'} className={'khaki'}>Impact Assesment</Link></li>
                        <li className={''}><Link to={'/'} className={''}>Sustainability</Link></li>
                        <li className={''}><Link to={'/'} className={'purple'}>Knowledge Centre</Link></li>
                        <li className={''}><Link to={'/'} className={'blueish-green'}>Jobs</Link></li>
                        <li className={'last'}><Link to={'/'} className={''}>Topic</Link></li>
                    </ul>
                </div>
                <div className={'grey-bg row'}>
                    
                </div>
            </header>
        </HeaderNavigationStyled>
    );
};

const HeaderNavigationStyled = styled.div`
    .navbar {
        flex-direction: column;
        margin: 0;
        max-width: 100%;
        padding: 0px;
        .links{
            display: flex;
            flex-direction: row;
            width: 100%;
            li {
                list-style-type: none;
                float: left;
                padding: 0 3%;
                position: relative;
                a{
                    font: 16px 'MuseoSans-500',Helvetica,Arial,sans-serif;
                }
                &::after{
                    position: absolute;
                    content: " ";
                    height: 15px;
                    width: 2px;
                    right: 0;
                    top: 3px;
                    background: #8a8a8a;
                }
                &.last{
                    cursor: pointer;
                    background: url(https://transform.iema.net/sites/default/themes/custom/transform/img/burger-icon.png) no-repeat right 0;
                    &::after{
                        background: transparent;
                    }
                }
            }
        }
        .grey-bg {
            background: #8a8a8a;
            padding: 15px 0 1px;
            width: 100%;
        }
    }
`;

export default HeaderNavigation;