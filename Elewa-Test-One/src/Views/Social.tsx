import { useSocialData } from '../ViewModels/useSocialData';
import "../Styles/Social.css"

const Social: React.FC = () => {
  const socialData = useSocialData();
  console.log(socialData);

  return (
    <div>
      {socialData ? (
        <div className='social-content'>
          <div className='image-text'>
                <div className='content-image-text'>
                    <div className="card-image">
                        <img src={socialData.socialImageCard} alt="socialImageCard" />
                    </div>
                    <div className='social-text'>
                        <h1>{socialData.socialHeading}</h1>
                        <p>{socialData.socialText}</p>
                    </div>
                    
                </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Social;
