import React, {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import {JumbotronTeaser, SideThumbTeaser, PaneTitle} from 'src/@localpkg';

import { Topic } from 'src/app/main/types';
import { getArticles } from 'src/app/main/store/actions/article.actions';
import {sendMessage} from 'src/app/store/chat/actions';
import { ChatState } from 'src/app/store/chat/types';

interface RootState {
    chat: ChatState
}

  const selectChat = (state: RootState) => state.chat;

const SectionOne: React.FC = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(sendMessage({user:'shhs', message:'shhshs', timestamp:89}));
        dispatch(getArticles({topic:Topic.News, reducer:'[JUMBOTRON HOMEPAGE NEWS]'}));
    },[dispatch])

    const chat = useSelector(selectChat);
    console.log('ho my', chat);

    return(
        <div>
            <PaneTitle title="News" />
            <Col sm={12} className={'padding-0'}>
                <JumbotronTeaser />
            </Col>
            <Row>
                <Col sm={6}>
                    <SideThumbTeaser />
                    <SideThumbTeaser />
                </Col>
                <Col sm={6} className={'padding-0 text-center'}>
                    Ad Board 
                </Col>
            </Row>
        </div>
    );
};

export default SectionOne;