import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {Article} from 'src/app/main/types';

interface TitleListProps {
    contents?: {}
    width?: number,
    articles?: Article[] 
}

interface Wrapper{
    width: string
};

const TitleList: React.FC<TitleListProps> = ({width, articles})=>{
    if(!articles){
        return <h1> articles is undefined </h1>
    }
    return(
        <div>
            <TitleListStyled width={`${width}%`}>
                <ol className={'custom-ordered-list'}>
                    {
                        articles.map((article: Article, index: number)=>{
                            return(
                                <li key={index}>
                                    <Link to={`article/${article.id}`}>{article.title}</Link>
                                </li> 
                            );
                        })
                    }  
                </ol>
            </TitleListStyled>
        </div>
    );
};

const TitleListStyled = styled.div<Wrapper>`
    .custom-ordered-list {
        counter-reset: li;
        margin-left: 0;
        padding-left: 0;
        &>li {
            width:${props => props.width };
            float:left;
            position: relative;
            margin: 0 0 20px 3em;
            padding: 12px 8px 20px;
            list-style: none;
            font: 16px 'MuseoSlab-700',Helvetica,Arial,sans-serif;
            color: #ea7600;
            &:before {
                content: counter(li);
                counter-increment: li;
                position: absolute;
                top: -6px;
                left: -1em;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                width: 1em;
                margin-right: 8px;
                padding: 4px;
                text-align: center;
                font: 4em 'MuseoSlab-300',Helvetica,Arial,sans-serif;
            }
        }
    }
`;

export default TitleList;
