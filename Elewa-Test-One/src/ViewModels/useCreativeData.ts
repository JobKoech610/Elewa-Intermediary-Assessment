
import { useState, useEffect } from 'react';
import { Creative } from '../Models/Creative';

// function to get data 
export const useCreativeData = () => {

    const [CreativeData, setCreativeData] = useState<Creative | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/creative')
            .then((response) => response.json())
            .then((data) => {
                setCreativeData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return CreativeData;

}