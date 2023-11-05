
import { useOpenData } from '../ViewModels/useOpenData';
import "../Styles/Open.css"

//Open component
const Open: React.FC = () => {
  const OpenData = useOpenData();
  console.log(OpenData);

  return (
    <div>
      {OpenData ? (
        <>
          <div className='open-image-text'>
                <div className='open-content-image-text'>
                    <div className="open-card-image">
                        <img src={OpenData.openImageCard} alt="socialImageCard" />
                    </div>
                    <div className='open-social-text'>
                        <h1>{OpenData.openHead}</h1>
                        <p>{OpenData.openText}</p>
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

export default Open;
