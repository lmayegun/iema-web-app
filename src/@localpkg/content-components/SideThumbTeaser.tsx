import React from 'react';
import styled from 'styled-components';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {Article} from 'src/app/main/types';
import Tags from './Tags';
import Date from './Date';

interface SideThumbTeaserProps {
    className?: string;
    showSummary?: boolean;
    article?: Article;
}

const SideThumbTeaser: React.FC<SideThumbTeaserProps> = ({className, showSummary, article})=>{
    if(!article){
        return <h5> not showing</h5>
    }
    console.log('SideThumbTeaser article',article)

    const { id, title, urlToImage, description } = article;
    return(
        <div className={`${className}`}>
        <SideThumbTeaserStyled>
        <Col sm={12} className={`padding-0`}>
            <div className={'teaser'}>
                <div className={'teaser-img'}>
                    <img 
                        src={urlToImage}
                        alt={'thumb-img'}
                        className={'img-responsive'}
                    />
                </div>
                <div className={'teaser-content'}>
                    <h3>
                        <Link to={`/article/${title}`}> {title} </Link>
                    </h3>
                    {(showSummary) && (
                        <p>
                            {description}
                        </p>
                    )}

                    <div className={'type-text-wrapper'}>
                        <Tags />
                    </div>

                    <div className={'type-date-wrapper'}>
                        <Date />
                    </div>
                </div>
            </div>
        </Col>
        </SideThumbTeaserStyled>
        </div>
    );
};

const SideThumbTeaserStyled = styled.div`
    margin-bottom: 20px;
    .teaser {
        position: relative;
        padding-bottom: 27px;

        .teaser-img{
            display: table-cell;
            vertical-align: top;

            img.img-responsive {
                max-width: 200px;
                margin-right: 25px;
            }
        }

        .teaser-content{
            display: table-cell;
            vertical-align: top;

            h3{
                font: 18px 'MuseoSlab-700',Helvetica,Arial,sans-serif;
                color: #000;
                margin-bottom: 5px;
            }

            p {
                font-size: 12px;
                margin-bottom: 16px;
            }
        }

        .type-text-wrapper, .type-date-wrapper{
            line-height: 0;
        }
    }
`;

export default SideThumbTeaser;

