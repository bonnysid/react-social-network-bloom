import React from 'react';
import s from './Description.module.css'

const SingleDescription = ({title, value}) => {
    return (
        <div>
            <span className={s.aboutTitle}>{`${title}: `}</span>{value && <span className={s.aboutText}>{value}</span>}
        </div>
    )
}

export default SingleDescription;