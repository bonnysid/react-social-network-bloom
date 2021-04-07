import {Validator} from "../../interfaces/other-interfaces";

export const required: Validator = (value) => !value ? 'Field is required!' : undefined;

export const maxLengthValidateCreator = (length: number): Validator => (value) => {
    if (value && (length < value.length)) return `Message to large, max is ${length}`;
    else return undefined;
}