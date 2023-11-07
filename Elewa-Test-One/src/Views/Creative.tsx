

import { useCreativeData } from '../ViewModels/useCreativeData';
import "../Styles/Cooperative.css"

// Component with Cooperative data
const Creative: React.FC = () => {
  const CreativeData = useCreativeData();
  console.log(CreativeData);

  return (
    <div>
      {CreativeData ? (
        <>
          <div className=''>
                <div className='coop-content-image-text'>
                    <div className="coop-card-image">
                        <img src={CreativeData.imageCard} alt="socialImageCard" />
                    </div>
                    <div className='coop-social-text'>
                        <h1>{CreativeData.title}</h1>
                        <p>{CreativeData.textOne}</p>
                        <p>{CreativeData.textTwo}</p>
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

export default Creative;
