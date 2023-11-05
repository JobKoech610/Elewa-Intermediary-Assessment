import { useState, useEffect } from 'react';
import { Analysis } from '../Models/Analysis';

// function to get data 
export const useAnalysisData = () => {

    const [AnalysisData, setAnalysisData] = useState<Analysis | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/analysis')
            .then((response) => response.json())
            .then((data) => {
                setAnalysisData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return AnalysisData;

}