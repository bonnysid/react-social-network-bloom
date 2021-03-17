import React, { useState } from 'react'

type UseInputReturn = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    reset: () => void
}

const useInput = (initialValue: string = ''): UseInputReturn => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const reset = () => setValue('');

    return {
        value,
        onChange,
        reset
    }
}

export default useInput;