import { useState, useEffect } from 'react';
import { Stakeholder } from '../Models/StakeHolder';

// function to get data 
export const useStakeholderData = () => {

    const [StakeholderData, setStakeholderData] = useState<Stakeholder | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/stakeholder')
            .then((response) => response.json())
            .then((data) => {
                setStakeholderData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return StakeholderData;

}