import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'  

const SocialBox: React.FC = ()=>{
  return(
    <SocialBoxStyled>
      <ul className={'social-icons'}>
        <li className={'phone'}>
          <Link to={'/'}></Link>
        </li>
        <li className={'twitter'}>
          <Link to={'/'}></Link>
        </li>
        <li className={'linkedln'}>
          <Link to={'/'}></Link>
        </li>
        <li className={'rss'}>
          <Link to={'/'}></Link>
        </li>
      </ul>
    </SocialBoxStyled>
  );
};

const SocialBoxStyled = styled.div`
  .social-icons {
    margin-top: 0px;
    padding: 0;
    list-style-type: none;
    text-align: center;
    li{
      &.phone {
        background: url(https://transform.iema.net/sites/default/themes/custom/transform/img/phone-icon.png) no-repeat 20px 10px;
      }
      &.twitter {
        background: url(https://transform.iema.net/sites/default/themes/custom/transform/img/twitter.png) no-repeat 0 5px;
        &:hover {
          background-image: url(https://transform.iema.net/sites/default/themes/custom/transform/img/twitter-rollover.png);
        }
      }
      &.linkedln {
        background: url(https://transform.iema.net/sites/default/themes/custom/transform/img/linkedln.png) no-repeat 0 0;
        &:hover {
          background-image: url(https://transform.iema.net/sites/default/themes/custom/transform/img/linkedln-rollover.png);
        }
      }
      &.rss {
        background: url(https://transform.iema.net/sites/default/themes/custom/transform/img/rss.png) no-repeat 0 5px;
        padding-right: 0;
        &:hover {
          background-image: url(https://transform.iema.net/sites/default/themes/custom/transform/img/rss-rollover.png);
        }
      }
      a{
        display: block;
        width: 50px;
        height: 50px;
      }
      display: inline-block;
      padding-right: 21px;
    }
  }
`;

export default SocialBox;