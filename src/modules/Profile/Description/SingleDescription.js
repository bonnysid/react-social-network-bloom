import React from 'react';

const SingleDescription = ({title, value}) => {
    return (
        <div>
            <span>{`${title}: `}</span><span>{value}</span>
        </div>
    )
}

export default SingleDescription;