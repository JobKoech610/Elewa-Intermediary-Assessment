import { useLandingData } from '../ViewModels/useLandingData';
import "../Styles/Landing.css"

const Landing: React.FC = () => {
  const landingData = useLandingData();
  console.log(landingData);

  return (
    <div>
      {landingData ? (
        <>
          <div  className='hero' style={{
            backgroundImage: `url(${landingData.landingImage})`,
            width: "100%",
            height: "100vh",
          }}>
            <div className='Text'>
            <p className='heading-text'>{landingData.scaling}</p>
            <h3 className='heading-title'>{landingData.title}</h3>
            </div>
            
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Landing;
