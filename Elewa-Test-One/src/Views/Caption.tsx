
import { useCaptionData } from '../ViewModels/useCaptionData';
import "../Styles/Caption.css"

// Component with Beyond data
const Caption: React.FC = () => {
  const CaptionData = useCaptionData();
  console.log(CaptionData);

  return (
    <div>
      {CaptionData ? (
        <>
        <div className=''>
        <div className='capt-text'>
                <div className='caption-t'>
                   <span className='caption'>{CaptionData.captionOne}</span>
                   <span>{CaptionData.captionTwo}</span> 
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

export default Caption;
