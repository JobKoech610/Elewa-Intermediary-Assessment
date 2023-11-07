import { useHeaderData } from '../ViewModels/useHeaderInvest';
import "../Styles/Header.css"

//Landing component
const HeaderInvest: React.FC = () => {
  const headerData = useHeaderData();
  console.log(headerData);

  return (
    <div>
      {headerData ? (
        <>
          <div  className='hero' style={{
            backgroundImage: `url(${headerData.backgroundImage})`,
            width: "100%",
            height: "100vh",
          }}>
            <div className='Text'>
            <p className='heading-text'>{headerData.head}</p>
            <h3 className='heading-title'>{headerData.title}</h3>
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
