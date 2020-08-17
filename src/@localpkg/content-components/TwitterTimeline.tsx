import React from 'react';
import styled from 'styled-components';

import PaneTitle from './PaneTitle'

interface TwitterTimelineProps{
    className?: string;
}


class App extends React.Component {

    render() {
    return (
        <div className="App">
            <div className="App-header">
                <h2>WELCOME TO THE PREMIER LEAGUE BLOG</h2>
                </div>
                <div>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>PREMIER LEAGUE</title>
                <div>
                    <a 
                        className="twitter-timeline" 
                        href="https://twitter.com/search?q=%40premierleague" 
                        data-widget-id={820173369198968833}
                    >
                        Tweets about @premierleague
                    </a>
                </div>
            </div>
        </div>
    );
    }
    }

const TwitterTimeline: React.FC<TwitterTimelineProps> = ({className})=>{
    return(
        <div>
            <PaneTitle title={"Twitter"} />
            <div className={className}>
                <App/>
                <a className={"twitter-timeline"} 
                href="https://twitter.com/IEMA_Transform?ref_src=twsrc%5Etfw"> </a> 
            </div>
        </div>
    );
};

const TwitterTimelineStyled = styled(TwitterTimeline)`
    height:350px;
    overflow:auto;
`;

export default TwitterTimelineStyled; 