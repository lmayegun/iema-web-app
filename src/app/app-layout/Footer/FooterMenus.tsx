import React from 'react';
import {Col} from 'react-bootstrap'; 
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FooterMenus: React.FC = ()=>{
  return(
    <FooterMenusStyled>
      <div className={'row footer-menus'}>
        <Col md={3}>
          <ul className={'menu nav'}>
            <li className={'first leaf'}> <span> Information </span></li>
            <li className={'leaf'}> <Link to='/'>About TRANSFORM</Link></li>
            <li className={'leaf'}> <Link to='/'>Advertise with us</Link></li>
            <li className={'leaf'}> <Link to='/'>Contact us</Link></li>
            <li className={'leaf'}> <Link to='/'>Editorial Guidlines</Link></li>
            <li className={'leaf'}> <Link to='/'>Privacy Policy</Link></li>
            <li className={'leaf'}> <Link to='/'>Terms & Conditions</Link></li>
            <li className={'leaf'}> <Link to='/'>Redactive</Link></li>
            <li className={'leaf'}> <Link to='/'>Think Green</Link></li>
          </ul>
        </Col>
        <Col md={3}>
          <ul className={'menu nav'}>
            <li className={'first leaf'}> <span> ABOUT IEMA </span></li>
            <li className={'leaf'}> <Link to='/'>About IEMA</Link></li>
            <li className={'leaf'}> <Link to='/'>IEMA Jobs</Link></li>
          </ul>
        </Col>
        <Col md={3}>
          <ul className={'menu nav'}>
            <li className={'first leaf'}> <span>IEMA MEMBERSHIP</span></li>
            <li className={'leaf'}> <Link to='/'>Individual Membership</Link></li>
            <li className={'leaf'}> <Link to='/'>Corporate Membership</Link></li>
            <li className={'leaf'}> <Link to='/'>Upgrade</Link></li>
            <li className={'leaf'}> <Link to='/'>Come back to us</Link></li>
          </ul>
        </Col>
      </div>
    </FooterMenusStyled>
  );
};

const FooterMenusStyled = styled.div`
  .footer-menus{
    background: #ebebeb;
    padding-top: 20px;
    -webkit-box-shadow: -1px -9px 21px -5px #acacac;
    -moz-box-shadow: -1px -9px 21px -5px #acacac;
    box-shadow: -1px -9px 21px -5px #acacac;
    .menu{
      &.nav {
        flex-direction:column;
        li{
          color: #474747;
          font: 16px 'MuseoSans-300',Helvetica,Arial,sans-serif;
          a{
            position: relative;
            display: block;
            padding: 10px 15px;
          }
          &.first {
            text-transform: uppercase;
            padding: 10px 15px;
            font: 18px 'MuseoSlab-700',Helvetica,Arial,sans-serif;
          }
        }
      }
    }
  }
`;

export default FooterMenus;