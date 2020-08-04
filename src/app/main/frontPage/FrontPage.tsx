import React from 'react';

import {SectionOne, SectionTwo, SectionThree, SectionFour} from './sections';

const FrontPage: React.FC = ()=>{
    return(
        <div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </div> 
    );
};

export default FrontPage; 