import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useDarkMode() {
    const [value, setValue] = useLocalStorage("key", false)

    useEffect(() => {
        const body = document.querySelector("body")
        
        if (value === true) {
            body.classList.add("dark-mode")
        }else {
            body.classList.remove("dark-mode")
        }
    }, [value])

    return [value, setValue]
}