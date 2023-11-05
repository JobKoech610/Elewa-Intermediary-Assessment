
import { useCooperativeData } from '../ViewModels/useCooperativeData';
import "../Styles/Cooperative.css"

const Cooperative: React.FC = () => {
  const CooperativeData = useCooperativeData();
  console.log(CooperativeData);

  return (
    <div>
      {CooperativeData ? (
        <>
          
          
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Cooperative;
