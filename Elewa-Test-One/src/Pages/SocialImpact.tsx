
import Landing from "../Views/Landing";
import Analysis from "../Views/Analysis";
import Social from "../Views/Social";
import Cooperative from "../Views/Cooperative";
import Beyond  from "../Views/Beyond";
import Open from "../Views/Open";
import Project from "../Views/Project";
import Footer from "../Views/Footer";


// This component is used to display the Social Invest page.
function SocialInvest() {
    return (
        <div className="homepage">
            <Landing />
            <Analysis />
            <Social />
            <Cooperative />
            <Beyond />
            <Open />
            <Project />
            <Footer />
        </div>
    )
}

export default SocialInvest