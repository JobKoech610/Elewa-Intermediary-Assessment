
import Header from '../Views/Header';
import Footer from "../Views/Footer";
import HeaderInvest from '../Views/HeaderInvest';
import Context from '../Views/Context'
import KeysFigures from '../Views/KeyFigures';
import Stakeholder from '../Views/Stakeholder';
import Creative from '../Views/Creative';
import Investing from '../Views/Investing';
import Caption from '../Views/Caption';

function Invest() {
  return (
    <div>
      <Header/>
      <HeaderInvest />
      <Context />
      <KeysFigures />
      <Stakeholder />
      <Creative />
      <Investing />
      <Caption />
      <Footer/>
    </div>
  )
}

export default Invest