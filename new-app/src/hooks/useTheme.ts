import { useEffect, useState } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setTheme(currentTheme);

        const listener = (e) => {
            setTheme(e.matches ? 'dark' : 'light');
        };

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
        };
    }, []);

    return { theme };
};
