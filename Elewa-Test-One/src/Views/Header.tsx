import { useHeaderData } from '../ViewModels/useHeaderData';
import { Link } from "react-router-dom";
import '../Styles/Header.css';

const Header: React.FC = () => {
  const headerData = useHeaderData();
  console.log(headerData);

  let links;
  if (headerData) {
    links = headerData.links.map((link, index) => (
      <li key={index} className='nav-item'>
        <Link to={link.url}>{link.text}</Link>
      </li>
    ));
  }
  
  return (
    <header className='header-container'>
      {headerData ? (
        <>
          <nav className='navbars'>
            <div className='border light-border'>
              <div className='elewa-text'>
                <a href="#" className='home-logo'><img src={headerData.logo} alt="logo" /></a>
              </div>
              <ul className='navmenu'>
                {links}
              </ul>
              
            </div>
          </nav>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </header>
  );
};

export default Header;
