import React from 'react';
import styled from 'styled-components';

const TransformLogo: React.FC = ()=>{
    return(
        <Wrapper>
            <img 
                src={`https://transform.iema.net/sites/default/themes/custom/transform/logo.png`} 
                alt={'transform logo'} 
                className={'img-responsive'}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    float: left;
`;

export default TransformLogo;