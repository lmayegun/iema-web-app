import React from 'react';
import styled from 'styled-components';

import PaneTitle from './PaneTitle'

const TwitterTimeline: React.FC = ()=>{
    return(
        <div>
            <PaneTitle title={"Twitter"} />
            <TwitterTimelineStyled> 
                <a className={"twitter-timeline"} 
                href="https://twitter.com/IEMA_Transform?ref_src=twsrc%5Etfw"> </a> 
            </TwitterTimelineStyled>
        </div>
    );
};

const TwitterTimelineStyled = styled.div`
    height:450px;
    overflow:auto;
`;

export default React.memo(TwitterTimeline); 