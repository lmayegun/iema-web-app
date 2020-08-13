import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'; 
import {useAccordionToggle, Accordion, Card} from 'react-bootstrap';

import {AppContextConsumer} from 'src/app/AppContext';
import {ModalComponent} from 'src/@localpkg'
import {HeaderTopicLinks} from './index';
import TopicLinks from './TopicModalLinks.json';

const HeaderNavigation: React.FC = ()=>{
    return <AppContextConsumer>
        {(context)=>{
            console.log(context)
            return(
                <>
                    <HeaderNavigationStyled>
                        <header id="navbar" className={'navbar container navbar-default'}>
                            <div className={'container main'}>
                                <ul className={'links'}>
                                    <li className={'first'}><Link to='/topic/news' className={'orange'}>News</Link></li>
                                    <li className={''}><Link to='/topic/management' className={'sea-blue'}>Management</Link></li>
                                    <li className={''}><Link to='/topic/impact-assesment' className={'khaki'}>Impact Assesment</Link></li>
                                    <li className={''}><Link to='/topic/sustainability' className={''}>Sustainability</Link></li>
                                    <li className={''}><Link to='/topic/knowledge-centre' className={'purple'}>Knowledge Centre</Link></li>
                                    <li className={''}><Link to='/topic/jobs' className={'blueish-green'}>Jobs</Link></li>
                                    <li className={'last'} onClick={()=>{context!.toggleModalMenu()}}>Topic</li>
                                </ul>
                            </div>
                            <div className={'grey-bg row'}>
        
                            </div>
                        </header>
                    </HeaderNavigationStyled>

                    <ModalComponent 
                        show={context!.modalMenu} 
                        handleClose={()=>{context!.toggleModalMenu()}} 
                        dialogClass={'modal-100w mt-0'}
                        header={<HeaderModalTitleStyled> Topic </HeaderModalTitleStyled>}
                    >
                        <HeaderTopicLinks links={TopicLinks}/>
                    </ModalComponent>

                    {/* <Example /> */}
                </>
            );
        }}
    </AppContextConsumer>
};

function CustomToggle( props: any ) {
    const decoratedOnClick = useAccordionToggle(props.eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
        >
        {props.children}
        </button>
    );
}

function Example() {
    return (
    <>
      <Accordion defaultActiveKey="0">
      <CustomToggle eventKey="1">Click me!</CustomToggle>
        <Card>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
    );
  }

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

const HeaderModalTitleStyled = styled.h2`
    border-bottom: 2px solid #000;
    padding-bottom: 13px;
    font: 50px 'MuseoSlab-300',Helvetica,Arial,sans-serif !important;
`;

export default HeaderNavigation;