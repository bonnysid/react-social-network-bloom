import React from 'react';
import s from "../PostForm/PostForm.module.css";

const SvgItem = ({width = '25px', height = '25px', fillColor = '#000000', urlId, fullUrl, className}) => {
    return (
        <svg className={className} width={width} height={height} fill={fillColor}>
            <use xlinkHref={fullUrl ? fullUrl : `img/icons.svg#${urlId}`} />
        </svg>
    )
}

export default SvgItem;