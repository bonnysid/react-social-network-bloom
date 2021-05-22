import {useCallback, useState} from "react";

export const useActive = (initialValue: boolean = false) => {
    const [isActive, setIsActive] = useState(initialValue)

    const toggle = useCallback(
        () => {
            setIsActive(prevState => !prevState);
        },
        [],
    );


    return {
        isActive,
        toggle
    }
}
