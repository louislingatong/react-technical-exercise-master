import React, {useEffect, useState} from 'react';

/**
 * A debounced hooks that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
 * @returns string - debounced value
 */
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay])
    return debouncedValue;
}

export {
    useDebounce
}
