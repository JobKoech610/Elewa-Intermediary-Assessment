
import { useFooterData } from '../ViewModels/useFooterData';
import "../Styles/Footer.css"

//Footer component
const Footer: React.FC = () => {
  const footerData = useFooterData();
  console.log(footerData);

  return (
    <div>
      {footerData ? (
        <>

    <div className="footer">
        
        <hr/>
        <div className="section-two">
            <div className="headquarters">
              <h3>{footerData.Headquarters.headquarters}</h3> 
              <p>{footerData.Headquarters.address}</p>
               
            </div>
            <div className="contact">
                <h3>{footerData.Contact.contact}</h3>
                <p>{footerData.Contact.phone}</p>
                <p>{footerData.Contact.email}</p>
            </div>
            <div className="navigation">
                <h3>{footerData.Navigation[0]}</h3>
                <p>{footerData.Navigation[1]}</p>
                <p>{footerData.Navigation[3]}</p>
                <p>{footerData.Navigation[4]}</p>
                <p>{footerData.Navigation[5]}</p>
            </div>
            <div className="Brands">
                <h3>{footerData.Brands[0]}</h3>
                <p>{footerData.Brands[1]}</p>
                <p>{footerData.Brands[2]}</p>
                <p>{footerData.Brands[3]}</p>
                
            </div>
            <div className="privacy">
                <h3>{footerData.Privacy[0]}</h3>
                <p>{footerData.Privacy[1]}</p>
                <p>{footerData.Privacy[2]}</p>
            </div>
        </div>
        <div className="footer-icons">
            <a href="#" className="logo"><img src={footerData.logo} alt="logo" />
                </a>
            <div className="social-icons"> 
                <i>
                    <img src={footerData.SocialMediaLogos.facebook} alt="facebook" />
                </i>
                <i>
                    <img src={footerData.SocialMediaLogos.instagram} alt="instagram" />
                      
                </i>
                <i>
                    <img src={footerData.SocialMediaLogos.linkedin} alt="linkedin" />  
                </i>
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

export default Footer;
