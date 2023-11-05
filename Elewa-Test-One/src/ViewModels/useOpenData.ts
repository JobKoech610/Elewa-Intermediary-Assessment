import { useState, useEffect } from 'react';
import { Open } from '../Models/Open';

export const useOpenData = () => {

    const [OpenData, setOpenData] = useState<Open | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/open')
            .then((response) => response.json())
            .then((data) => {
                setOpenData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return OpenData;

}