import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderBurgerMenu: React.FC = ()=>{
  return(
    <BurgerMenuStyled>
      <nav className="top-nav" id="mobile-menu">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          <Link to='/'>News</Link>
          <Link to='/'>Management</Link>
          <Link to='/'>Impact Assesment</Link>
          <Link to='/'>Sustainability</Link>
          <Link to='/'>Knowledge centre</Link>
          <Link to='/'>Jobs</Link>
          <Link to='/'>Topic</Link>
        </ul>
      </nav>
    </BurgerMenuStyled>
  );
};

const BurgerMenuStyled = styled.div`
.top-nav {
	width: 100%;
	padding: 10px 10px 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	transition: top .75s ease-in;

	.menu{
    text-transform: uppercase;
    font: 18px 'MuseoSans-700',Helvetica,Arial,sans-serif;
    padding: 4px 0;
		list-style: none;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		max-height: 0;
		transition: max-height .2s ease-out;

		li a{
			display: inline-block;
			min-width: 75px;
			margin: .3em 0;
			padding: 0 10px;
			transition: 1s all;
			text-decoration: none;
			font-size: 20px;

			&:link, &:visited{
				color: #0d0d0d;
			}

			&:focus, &:hover, &:active{
				transform: scale(1.1) rotate(-2deg);
				color: #20232d
			}
		}
	}

	.menu-icon{
		cursor: pointer;
		display: inline-block;
    padding: 28px 20px;
    position: absolute;
    top: 0;
    right: 0;

		.navicon{
	    background: #20232d;
      display: block;
      height: 4px;
      position: relative;
      width: 2rem;

			&:before, &:after{
				background: #20232d;
				content: '';
				display: block;
				height: 100%;
				position: absolute;
				transition: all .2s ease-out;
				width: 100%;
			}

			&:before{
				top: 7px;
			}

			&:after{
				top: -7px;
			}
		}
	}

	.menu-btn{
		display: none;

		&:checked ~ .menu{
			max-height: 300px;
		}

		&:checked ~ .menu-icon .navicon{
			background: transparent;

			&:before{
				transform: rotate(-45deg);
			}

			&:after{
				transform: rotate(45deg);
			}
		}

		&:checked ~ .menu-icon:not(.steps) .navicon{
			&:before, &:after{
				top: 0;
			}
		}
	}
}
`;

export default HeaderBurgerMenu
