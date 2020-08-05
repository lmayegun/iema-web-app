import React from 'react';

import {SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix} from './sections';

const FrontPage: React.FC = ()=>{
    return(
        <div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </div> 
    );
};

export default FrontPage; 