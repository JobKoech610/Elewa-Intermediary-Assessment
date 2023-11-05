import { useState, useEffect } from 'react';
import { Header } from '../Models/Header';

export const useHeaderData = () => {

    const [HeaderData, setHeaderData] = useState<Header | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/header')
            .then((response) => response.json())
            .then((data) => {
                setHeaderData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return HeaderData;

}