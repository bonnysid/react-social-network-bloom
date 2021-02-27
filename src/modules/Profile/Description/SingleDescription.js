import React from 'react';

const SingleDescription = ({title, value}) => {
    return (
        <div>
            <p>{`${title} : ${value}`}</p>
        </div>
    )
}

export default SingleDescription;