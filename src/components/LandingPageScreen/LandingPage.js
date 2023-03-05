import SearchHomePage from "./SearchHomePage";
import NavBar from "./NavBar";
import TrendingCitiesPage from "./TrendingCitiesPage";
import WhatSetsUsApartPage from "./WhatSetsUsApartPage";
import styles from "./LandingPage.module.css"


const LandingPage = (props) => {
    return (
        <div className={styles.container}>
            <SearchHomePage />
            <TrendingCitiesPage />
            <WhatSetsUsApartPage />
        </div>
    )
}

export default LandingPage