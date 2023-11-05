import { useState, useEffect } from 'react';
import { Landing } from '../Models/Landing';

// function to get data 
export const useLandingData = () => {

    const [LandingData, setLandingData] = useState<Landing | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/landing')
            .then((response) => response.json())
            .then((data) => {
                setLandingData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return LandingData;

}