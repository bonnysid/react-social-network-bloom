import {Field, WrappedFieldProps} from "redux-form";
import React from "react";
import {Validator} from "../../interfaces/other-interfaces";

export interface ICreateFieldParams <T extends string> {
    component: React.FC<WrappedFieldProps> | React.Component<WrappedFieldProps> | string,
    type?: string,
    name: T,
    placeholder?: string,
    validators?: Validator[],
    props?: any
}

export interface ITextareaProps {
    isResize?: boolean,
    props?: any
}

const createField = <T extends string>(params : ICreateFieldParams<T>) => {
    return <Field {...params.props} component={params.component} type={params.type} name={params.name} placeholder={params.placeholder} validate={params.validators}/>
}

export default createField;