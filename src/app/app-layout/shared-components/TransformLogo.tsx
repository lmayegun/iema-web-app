import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const TransformLogo: React.FC = ()=>{
    return(
        <Wrapper>
            <Link to={'/'}>
            <img 
                src={`https://transform.iema.net/sites/default/themes/custom/transform/logo.png`} 
                alt={'transform logo'} 
                className={'img-responsive'}
            />
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    float: left;
`;

export default TransformLogo;