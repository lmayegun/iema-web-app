import React from 'react';

import {SectionOne, SectionTwo, SectionThree} from './sections';

const FrontPage: React.FC = ()=>{
    return(
        <div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </div> 
    );
};

export default FrontPage; 