import { useState, useEffect } from 'react';
import { Investing } from '../Models/Investing';

// function to get data 
export const useInvestingData = () => {

    const [InvestingData, setInvestingData] = useState<Investing | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/Investing')
            .then((response) => response.json())
            .then((data) => {
                setInvestingData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return InvestingData;

}