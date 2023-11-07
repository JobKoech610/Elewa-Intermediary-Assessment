import { useState, useEffect } from 'react';
import {  HeaderInvest } from '../Models/HeaderInvest';
// function to get data 
export const useHeaderData = () => {

    const [HeaderInvestData, setHeaderInvest] = useState<HeaderInvest | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/invest')
            .then((response) => response.json())
            .then((data) => {
                setHeaderInvest(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return HeaderInvestData;

}