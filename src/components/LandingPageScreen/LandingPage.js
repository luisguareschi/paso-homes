import SearchHomePage from "./SearchHomePage/SearchHomePage";
import TrendingCitiesPage from "./TrendingCitiesPage/TrendingCitiesPage";
import WhatSetsUsApartPage from "./WhatSetsUsApartPage/WhatSetsUsApartPage";
import styles from "./LandingPage.module.css"
import InfoBox from "./InfoBoxPage/InfoBox";
import SingUpCard from "./SingUpCard/SingUpCard";
import Footer from "./Footer/Footer";
import TestimonialBox from "./TestimonialBoxPage/TestimonialBox"
import {useWindowSize} from "usehooks-ts";

// min width: 1000px
const LandingPage = (props) => {
    const {width, height} = useWindowSize()
    const handleArrowClicked = () => {
        let vh = window.innerHeight
        window.scroll(0, vh*2)
        console.log(vh)
    }

    if (width < 1000) {
        return (
            <div>
                Screen width is too low
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <SearchHomePage handleArrowClicked={handleArrowClicked}/>
            <TrendingCitiesPage />
            <WhatSetsUsApartPage />
            <InfoBox />
            <TestimonialBox />
            <SingUpCard />
            <Footer />
        </div>
    )
}

export default LandingPage