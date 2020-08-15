import React from 'react'; 
import styled from 'styled-components';
import {Link} from 'react-router-dom';

interface TagsProps {
    className?: string;
    tags?: []
}

const Tags: React.FC<TagsProps> = ({className, tags})=>{
    if(!tags){
        return(
            <p> no Tags</p>
        );
    }
    return(
        <TagsStyled>
            <span className={`${className} type-text`}>
                {
                    tags.map(( tag: string, index: number)=>{
                        return(
                            <Link to='/' key={index}>{tag}</Link>
                        );
                    })
                }
            </span>
        </TagsStyled>
    );
};

const TagsStyled = styled.span`
    font: 12px 'MuseoSans-700',Helvetica,Arial,sans-serif;
    color: #474747;
`;
export default Tags;