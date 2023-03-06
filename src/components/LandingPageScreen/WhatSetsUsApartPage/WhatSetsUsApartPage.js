import styles from "./WhatSetsUsApartPage.module.css"
import DataCard from "./DataCard";

const dataCards = [
    {title: 'Flexibility',
        description: 'Greater flexibility in rental timeframes, ' +
            'with options of 1 to 3 months, allowing for greater adaptability ' +
            'to their unique needs and circumstances.',
        img: require("../../../assets/LandingPage/Flexibility.png")},
    {title: 'Convenient',
        description: 'Proximity to academic and health institutions, providing easy access to education and healthcare resources.',
        img: require("../../../assets/LandingPage/Convenient.png")},
    {title: 'Affordable',
        description: 'Lower costs compared to traditional vacation rentals, allowing for more affordable housing options.',
        img: require("../../../assets/LandingPage/Affordable.png")},
    {title: 'Smart-Search',
        description: 'The ability to search for properties based on proximity to specific locations, ' +
            'such as work or school, rather than just browsing a random map.',
        img: require("../../../assets/LandingPage/SmartSearch.png")},
]

const WhatSetsUsApartPage = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>What sets us Apart?</div>
            <div className={styles.infoContainer}>
                {dataCards.map((dict, index) => {
                    return (
                        <DataCard key={index} dataCard={dict}/>
                    )
                })}
            </div>
        </div>
    )
}

export default WhatSetsUsApartPage