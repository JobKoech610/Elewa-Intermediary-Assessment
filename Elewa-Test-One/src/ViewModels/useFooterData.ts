

import { useState, useEffect } from 'react';
import { Footer } from '../Models/Footer';
// function to get data 
export const useFooterData = () => {

    const [footerData, setFooterData] = useState<Footer | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/footer')
            .then((response) => response.json())
            .then((data) => {
                setFooterData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return footerData;

}