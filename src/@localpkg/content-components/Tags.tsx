import React from 'react'; 
import styled from 'styled-components';

interface TagsProps {
    className?: string;
}
const Tags: React.FC<TagsProps> = (props)=>{
    return(
        <span className={`${props.className} type-text`}>
            <a href="/">
                Biodiversity
            </a>|
            <a href="/">
                Biodiversity
            </a>|
            <a href="/">
                Wildlife & Habitats
            </a>|
        </span>
    );
};

const TagsStyled = styled(Tags)`
    font: 12px 'MuseoSans-700',Helvetica,Arial,sans-serif;
    color: #474747;
`;
export default TagsStyled;