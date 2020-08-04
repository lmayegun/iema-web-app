import React from 'react';
import styled from 'styled-components';

import PaneTitle from './PaneTitle'

interface TwitterTimelineProps{
    className?: string;
}

const TwitterTimeline: React.FC<TwitterTimelineProps> = ({className})=>{
    return(
        <div>
            <PaneTitle title={"Twitter"} />
            <div className={className} style={{height:'500px', overflow:'auto'}}> 
                <a className={"twitter-timeline"} 
                href="https://twitter.com/IEMA_Transform?ref_src=twsrc%5Etfw"> </a> 
            </div>
        </div>
    );
};

const TwitterTimelineStyled = styled(TwitterTimeline)`
    height:400px;
    overflow:auto;
`;

export default TwitterTimelineStyled; 