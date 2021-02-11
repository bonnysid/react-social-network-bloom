export const required = value => value.length === 0 ? 'Field is required!' : undefined;

export const maxLengthValidateCreator = length => value => {
    if (length > value.length) return `Message to large, max is ${length}`;
    else return undefined;
}