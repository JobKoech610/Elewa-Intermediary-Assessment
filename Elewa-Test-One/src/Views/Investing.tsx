

import { useInvestingData } from '../ViewModels/useInvestingData';
import "../Styles/Beyond.css"

// Component with Beyond data
const Investing: React.FC = () => {
  const InvestingData = useInvestingData();
  console.log(InvestingData);

  return (
    <div>
      {InvestingData ? (
        <>
        <div className=''>
        <div className='beyond-image-text'>
                <div className='beyond-content-image-text'>
                    <div className="beyond-card-image">
                        <img src={InvestingData.imageCard} alt="ImageCard" />
                    </div>
                    <div className='beyond-social-text'>
                        <h1>{InvestingData.title}</h1>
                        <p>{InvestingData.textOne}</p>
                      
                        <div className="button">
              <a href="your-link-here">
                <div className="button-text">
                    {InvestingData.textTwo}
                </div>
                <div className="circle"><span></span></div>
              </a>
            </div>
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

export default Investing;
