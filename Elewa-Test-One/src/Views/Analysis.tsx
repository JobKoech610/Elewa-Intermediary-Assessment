import { useAnalysisData } from '../ViewModels/useAnalysisData';
import "../Styles/Analysis.css"

const Analysis: React.FC = () => {
  const analysisData = useAnalysisData();
  console.log(analysisData);

  return (
    <div>
      {analysisData ? (
        <>
          <div className='analysis'>
            <div>
                <h2>{analysisData.peopleTrained}</h2>
                <p>{analysisData.peopleTrainedText}</p>
            </div>
            <div>
                <h2>{analysisData.careersLaunched}</h2>
                <p>{analysisData.careersLaunchedText}</p>
            </div>
            <div>
                <h2>{analysisData.projectsFinished}</h2>
                <p>{analysisData.projectsFinishedText}</p>
            </div>
            <div>
                <h2>{analysisData.investors}</h2>
                <p>{analysisData.investorsText}</p>
            </div>
          </div>
          
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Analysis;
