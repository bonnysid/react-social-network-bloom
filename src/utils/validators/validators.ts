export const required = (value: string): string | undefined => !value ? 'Field is required!' : undefined;

export const maxLengthValidateCreator = (length: number) => (value: string) => {
    if (value && (length < value.length)) return `Message to large, max is ${length}`;
    else return undefined;
}