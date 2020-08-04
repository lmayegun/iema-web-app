import React from 'react';
import styled from 'styled-components';
import {Col} from 'react-bootstrap';

import Tags from './Tags';
import Date from './Date';

interface SideThumbTeaserProps {
    className?: string;
}

const SideThumbTeaser: React.FC<SideThumbTeaserProps> = (props)=>{
    return(
        <Col sm={12} className={`${props.className} padding-0`}>
            <div className={'teaser'}>
                <div className={'teaser-img'}>
                    <img 
                        src={'https://transform.iema.net/sites/default/files/styles/thumbnail_200x120/public/s3/hero/web_child_pollution_istock-852229954_0_0.png?itok=VFBxbrfP'}
                        alt={'thumb-img'}
                        className={'img-responsive'}
                    />
                </div>
                <div className={'teaser-content'}>
                    <h3>
                        <a href="/">Air pollution exposure linked to higher COVID-19 risk</a>
                    </h3>
                    <p>
                        A recent study in the Netherlands has provided further evidence to suggest that exposure to higher levels of air pollution increases the risk of death from COVID-19.
                    </p>

                    <div className={'type-text-wrapper'}>
                        <Tags />
                    </div>

                    <div className={'type-date-wrapper'}>
                        <Date />
                    </div>
                </div>
            </div>
        </Col>
    );
};

const SideThumbTeaserStyled = styled(SideThumbTeaser)`
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

export default SideThumbTeaserStyled;

