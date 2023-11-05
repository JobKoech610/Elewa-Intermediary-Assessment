import { useState, useEffect } from 'react';
import { Cooperative } from '../Models/Cooperative';

// function to get data 
export const useCooperativeData = () => {

    const [CooperativeData, setCooperativeData] = useState<Cooperative | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/cooperative')
            .then((response) => response.json())
            .then((data) => {
                setCooperativeData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return CooperativeData;

}