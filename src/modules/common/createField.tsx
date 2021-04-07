import {Field} from "redux-form";
import React from "react";
import {ICreateFieldParams} from "../../interfaces/other-interfaces";

const createField = <T extends string>(params : ICreateFieldParams<T>) => {
    return <Field {...params.props} component={params.component} type={params.type} name={params.name} placeholder={params.placeholder} validate={params.validators}/>
}

export default createField;