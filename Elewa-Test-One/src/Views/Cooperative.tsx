
import { useCooperativeData } from '../ViewModels/useCooperativeData';
import "../Styles/Cooperative.css"

// Component with Cooperative data
const Cooperative: React.FC = () => {
  const CooperativeData = useCooperativeData();
  console.log(CooperativeData);

  return (
    <div>
      {CooperativeData ? (
        <>
          <div className='coop-image-text'>
                <div className='coop-content-image-text'>
                    <div className="coop-card-image">
                        <img src={CooperativeData.coopImageCard} alt="socialImageCard" />
                    </div>
                    <div className='coop-social-text'>
                        <h1>{CooperativeData.coopHead}</h1>
                        <p>{CooperativeData.coopText}</p>
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

export default Cooperative;
