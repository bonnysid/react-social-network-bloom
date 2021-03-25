import React, { useState } from 'react'

type UseInputReturn = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const useInput = (initialValue: string = ''): UseInputReturn => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange
    }
}

export default useInput;