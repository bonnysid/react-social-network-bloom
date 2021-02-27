import React from 'react';
import reduxForm from 'redux-form';

const DescriptionInfoForm = ({handleSubmit, savePhoto}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField()}
        </form>
    )
}

export default reduxForm({form: 'description'})(DescriptionInfoForm);