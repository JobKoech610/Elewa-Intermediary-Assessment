import { useState, useEffect } from 'react';
import {  KeyFigures } from '../Models/KeyFigures';
// function to get data 
export const useKeyFiguresData = () => {

    const [KeyFiguresData, setKeyFigures] = useState<KeyFigures | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/Keyfigures')
            .then((response) => response.json())
            .then((data) => {
                setKeyFigures(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return KeyFiguresData;

}