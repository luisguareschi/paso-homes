import SearchHomePage from "./SearchHomePage/SearchHomePage";
import TrendingCitiesPage from "./TrendingCitiesPage/TrendingCitiesPage";
import WhatSetsUsApartPage from "./WhatSetsUsApartPage/WhatSetsUsApartPage";
import styles from "./LandingPage.module.css"
import InfoBox from "./InfoBoxPage/InfoBox";


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