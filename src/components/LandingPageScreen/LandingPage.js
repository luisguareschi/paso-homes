import SearchHomePage from "./SearchHomePage/SearchHomePage";
import TrendingCitiesPage from "./TrendingCitiesPage/TrendingCitiesPage";
import WhatSetsUsApartPage from "./WhatSetsUsApartPage/WhatSetsUsApartPage";
import styles from "./LandingPage.module.css"
import InfoBox from "./InfoBoxPage/InfoBox";
import SingUpCard from "./SingUpCard/SingUpCard";
import Footer from "./Footer/Footer";
import TestimonialBox from "./TestimonialBoxPage/TestimonialBox"


const LandingPage = (props) => {
    return (
        <div className={styles.container}>
            <SearchHomePage />
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