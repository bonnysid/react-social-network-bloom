import React from 'react';
import s from './SocialLink.module.css';

const SocialLink = ({width = '25px', height = '25px', urlId, fullUrl, hoverTitlem, link}) => {
    return (
        <a className={s.content} href={link} target={'_blank'}>
            <svg width={width} height={height}>
                <use xlinkHref={fullUrl ? fullUrl : `img/icons.svg#${urlId}`} />
            </svg>
        </a>
    );
}

export default SocialLink;