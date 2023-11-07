

import { useStakeholderData } from '../ViewModels/useStakeholderData';
import "../Styles/Beyond.css"

// Component with Beyond data
const Stakeholder: React.FC = () => {
  const StakeholderData = useStakeholderData();
  console.log(StakeholderData);

  return (
    <div>
      {StakeholderData ? (
        <>
        <div className=''>
        <div className='beyond-image-text'>
                <div className='beyond-content-image-text'>
                    <div className="beyond-card-image">
                        <img src={StakeholderData.imageCard} alt="ImageCard" />
                    </div>
                    <div className='beyond-social-text'>
                        <h1>{StakeholderData.title}</h1>
                        <p>{StakeholderData.textOne}</p>
                        <p>{StakeholderData.textTwo}</p>
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

export default Stakeholder;
