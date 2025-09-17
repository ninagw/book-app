import { useEffect, useState } from "react";

export function useLocalStorage(key: string) {
    const [value, setValue] = useState(() => {
        //getting data from localStorage
        return JSON.parse(localStorage.getItem("value")!);
    });

    useEffect(() => {
        //setting data to localStorage
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}