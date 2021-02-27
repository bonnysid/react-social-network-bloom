import {Field} from "redux-form";
import React from "react";

const createField = (component, type, name, placeholder, validators = [], props = null) => {
    return <Field {...props} component={component} type={type} name={name} placeholder={placeholder} validate={validators}/>
}

export default createField;