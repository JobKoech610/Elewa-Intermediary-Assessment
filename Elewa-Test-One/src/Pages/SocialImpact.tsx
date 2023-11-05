import React from "react";
import Landing from "../Views/Landing";
import Analysis from "../Views/Analysis";
import Social from "../Views/Social";


// This component is used to display the Social Invest page.
function SocialInvest() {
    return (
        <div className="homepage">
            <Landing />
            <Analysis />
            <Social />
        </div>
    )
}

export default SocialInvest