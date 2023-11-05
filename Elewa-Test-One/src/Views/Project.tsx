import React, { useState, useEffect } from 'react';
import { useProjectData } from '../ViewModels/useProjectData';
import "../Styles/Project.css";


// project component
const Project: React.FC = () => {
  const projectData = useProjectData();
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (projectData?.projectLogos && projectData.projectLogos.length > 1) {
        setCurrentLogoIndex(prevIndex =>
          prevIndex === projectData.projectLogos.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 1000); // 1 second

    return () => clearInterval(interval);
  }, [projectData]);

  let logos;
  if (projectData?.projectLogos) {
    logos = projectData.projectLogos.map((logo, index) => (
      <img
        key={index}
        src={logo}
        className={`logo-image ${index === currentLogoIndex ? 'active' : ''}`}
        alt={`project-logo-${index}`}
      />
    ));
  }

  return (
    <div className="project-container">
      {projectData ? (
        <>
          <div className='projects-content'>
            <div className='projects'>
                <div><p>{projectData.projectsHead}</p></div>
                <div className='logos-container'>
                    <div className="logo-carousel">
                      {logos}
                    </div>
                </div>
                <div className='project-Text'>
                    <span>{projectData.projectsText}</span>
                </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Project;
