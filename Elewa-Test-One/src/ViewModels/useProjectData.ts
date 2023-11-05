
import { useState, useEffect } from 'react';
import { Project } from '../Models/Project';

// function to get data 
export const useProjectData = () => {

    const [ProjectData, setProjectData] = useState<Project | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/projects')
            .then((response) => response.json())
            .then((data) => {
                setProjectData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return ProjectData;

}