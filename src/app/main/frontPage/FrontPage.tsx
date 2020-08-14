import React from 'react';

import {SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix, SectionSeven} from './sections';

const FrontPage: React.FC = ()=>{
    return(
        <div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
        </div> 
    );
};

export default FrontPage; 