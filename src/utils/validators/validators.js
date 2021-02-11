export const required = value => !value ? 'Field is required!' : undefined;

export const maxLengthValidateCreator = length => value => {
    if (value && (length < value.length)) return `Message to large, max is ${length}`;
    else return undefined;
}