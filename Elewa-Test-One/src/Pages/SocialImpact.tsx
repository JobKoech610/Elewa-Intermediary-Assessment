
import Landing from "../Views/Landing";
import Analysis from "../Views/Analysis";
import Social from "../Views/Social";
import Cooperative from "../Views/Cooperative";
import Beyond  from "../Views/Beyond";
import Open from "../Views/Open";


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
        </div>
    )
}

export default SocialInvest