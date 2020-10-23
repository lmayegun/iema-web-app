import React from 'react';
import { RouteComponentProps } from 'react-router';

import {SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix, SectionSeven} from './sections';
import homepageReducer from 'src/app/main/frontPage/store/reducers/index';
import withReducer from 'src/app/store/withReducer';

const FrontPage: React.FC<RouteComponentProps> = ()=>{
    return(
        <div>
            <SectionOne  />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
        </div> 
    );
};

export default withReducer('homepage', homepageReducer)(FrontPage); 