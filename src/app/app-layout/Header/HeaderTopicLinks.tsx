import React from 'react';
import styled from 'styled-components'; 
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

interface Props {
  links: any;
}

const HeaderTopicLinks: React.FC<Props> = ({links})=>{
  return(
    <Container>
      <HeaderTopicLinksStyled>
        {
          links.map((parent: any, index: number)=>{
            const {childrens} = parent;
            return(
              <li key={index}>
                <Link to={`${parent.url}`}>{parent.title}</Link>
                <ul className={'menu nav'}>
                { 
                  childrens.map((child: any, index: number)=>{
                    return(
                      <li key={index}>
                        <Link to={`${child.url}`}>{child.title}</Link>
                      </li>
                    )
                  })
                }
                </ul>
              </li>
            )
          })
        } 
      </HeaderTopicLinksStyled>
    </Container>
  );
};

const HeaderTopicLinksStyled = styled.ul`
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  text-align: center;
  li{
    float: left;
    margin-right: 20px;
    width: 22%;
    margin-bottom: 20px;
    a{
      font: 18px 'MuseoSans-700',Helvetica,Arial,sans-serif;
      text-align: left;
      &:hover{
        text-decoration: none;
        background-color: #eee;
      }
    }
    >a{
      position: relative;
      display: block;
      padding: 10px 15px;
    }
    li{
      width: 100%;
      margin-right: 0px;
      margin-bottom: 0px;
      a{
        font: 16px 'MuseoSans-300',Helvetica,Arial,sans-serif;
        text-align: left;
      }
    }
  }
`;

export default HeaderTopicLinks;