import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initialValue: any) {
    const [value, setValue] = useState(() => {
        //getting data from localStorage
        return JSON.parse(localStorage.getItem("value") || JSON.stringify(initialValue));
    });

    useEffect(() => {
        //setting data to localStorage
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}