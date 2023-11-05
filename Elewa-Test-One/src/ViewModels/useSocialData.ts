import { useState, useEffect } from 'react';
import { Social } from '../Models/Social';

export const useSocialData = () => {

    const [SocialData, setSocialData] = useState<Social | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/social')
            .then((response) => response.json())
            .then((data) => {
                setSocialData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return SocialData;

}