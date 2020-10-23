import React from 'react';

const IemaLogo: React.FC = ()=>{
    return(
        <p>
            <img 
                src={`https://transform.iema.net/sites/default/themes/custom/transform/img/iema-logo-header.png`} 
                alt={'iema logo'} 
                className={'img-responsive'}
            />
        </p>
    );
};

export default IemaLogo;