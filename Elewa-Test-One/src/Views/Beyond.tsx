
import { useBeyondData } from '../ViewModels/useBeyondData';
import "../Styles/Beyond.css"

// Component with Beyond data
const Beyond: React.FC = () => {
  const BeyondData = useBeyondData();
  console.log(BeyondData);

  return (
    <div>
      {BeyondData ? (
        <>
        <div className='beyond-content'>
        <div className='beyond-image-text'>
                <div className='beyond-content-image-text'>
                    <div className="beyond-card-image">
                        <img src={BeyondData.beyondImageCard} alt="socialImageCard" />
                    </div>
                    <div className='beyond-social-text'>
                        <h1>{BeyondData.beyondHead}</h1>
                        <p>{BeyondData.beyondText}</p>
                    </div>
                    
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

export default Beyond;
