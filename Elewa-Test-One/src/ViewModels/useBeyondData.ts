import { useState, useEffect } from 'react';
import { Beyond } from '../Models/Beyond';

// function to get data 
export const useBeyondData = () => {

    const [BeyondData, setBeyondData] = useState<Beyond | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/beyond')
            .then((response) => response.json())
            .then((data) => {
                setBeyondData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return BeyondData;

}