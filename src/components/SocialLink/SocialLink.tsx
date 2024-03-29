import React from 'react';
import s from './SocialLink.module.css';
import icons from '../../assets/img/icons.svg';

interface SocialLinkProps {
    width?: string,
    height?: string,
    urlId?: string,
    hoverTitle?: string,
    link: string | null,
    fullUrl?: string
}

const SocialLink: React.FC<SocialLinkProps> = ({width = '25px', height = '25px', urlId, fullUrl, hoverTitle, link}) => {
    return (
        <a className={s.content} href={`https://${link}`} target='_blank' title={hoverTitle}>
            <svg width={width} height={height}>
                <use xlinkHref={fullUrl ? fullUrl : `${icons}#${urlId}`} />
            </svg>
        </a>
    );
}

export default SocialLink;
