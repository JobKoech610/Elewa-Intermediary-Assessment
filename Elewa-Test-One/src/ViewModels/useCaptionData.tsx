
import { useState, useEffect } from 'react';
import { Caption } from '../Models/Caption';

// function to get data 
export const useCaptionData = () => {

    const [CaptionData, setCaptionData] = useState<Caption | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/Caption')
            .then((response) => response.json())
            .then((data) => {
                setCaptionData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return CaptionData;

}