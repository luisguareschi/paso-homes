import SearchHomePage from "./SearchHomePage/SearchHomePage";
import TrendingCitiesPage from "./TrendingCitiesPage";
import WhatSetsUsApartPage from "./WhatSetsUsApartPage";
import styles from "./LandingPage.module.css"
import InfoBox from "./InfoBox";


const LandingPage = (props) => {
    return (
        <div className={styles.container}>
            <SearchHomePage />
            <TrendingCitiesPage />
            <WhatSetsUsApartPage />
            <InfoBox />
        </div>
    )
}

export default LandingPage