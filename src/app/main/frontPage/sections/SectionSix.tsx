import React from 'react';
import {MagazineSlider, PaneTitle} from 'src/@localpkg'

const SectionSix: React.FC = ()=>{
    return(
        <div>
            <PaneTitle title={"The magazine"} />
            <MagazineSlider />
        </div>
    );
};

export default SectionSix;