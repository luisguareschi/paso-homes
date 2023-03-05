import styles from "./TrendingCitiesPage.module.css"
import CityCard from "./CityCard";

const cityCards = [
    {name: "Los Angeles", img: require("../../assets/LandingPage/LA.png"), propertyQty: 20},
    {name: "Miami", img: require("../../assets/LandingPage/MIA.png"), propertyQty: 55},
    {name: "San Francisco", img: require("../../assets/LandingPage/SF.png"), propertyQty: 123},
    {name: "New York", img: require("../../assets/LandingPage/NY.png"), propertyQty: 49}
]

const TrendingCitiesPage = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleText}>Trending Cities</div>
            <div className={styles.subtitleText}>Most users go to these places</div>
            <div className={styles.cityCardsOuterContainer}>
                {cityCards.map((dict, index) => {
                    return (
                        <CityCard info={dict} key={index}/>
                    )
                })}
            </div>
        </div>
    )
}

export default TrendingCitiesPage