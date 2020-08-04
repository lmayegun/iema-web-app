import React from 'react';

import {SectionOne, SectionTwo, SectionThree, SectionFour} from './sections';
import SectionSix from './sections/SectionSix';

const FrontPage: React.FC = ()=>{
    return(
        <div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionSix />
        </div> 
    );
};

export default FrontPage; 