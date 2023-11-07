import { useHeaderData } from '../ViewModels/useHeaderInvest';
import "../Styles/Context.css"

//Landing component
const HeaderInvest: React.FC = () => {
  const headerData = useHeaderData();
  console.log(headerData);

  return (
    <div>
      {headerData ? (
        <>
          
            <div className='textInvest'>
            
            <h3 className='headText'>{headerData.headTwo}</h3>
            <p className='headinvestText'>{headerData.text}</p>
            <div  className=''> 
            <img src={headerData.cardImage} alt="" /> 
            </div>
            </div>
            
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HeaderInvest;
