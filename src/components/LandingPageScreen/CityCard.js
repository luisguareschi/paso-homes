import styles from "./TrendingCitiesPage.module.css"

const CityCard = (props) => {
    const img = props.info.img
    return (
        <div className={styles.cityCardContainer} style={{backgroundImage: `url(${img})`, backgroundSize: "cover"}}>
            <div className={styles.cityInfoTextContainer}>
                <div className={styles.cityName}>
                    {props.info.name}
                </div>
                <div className={styles.cityNumberOfProperties}>
                    {props.info.propertyQty} Properties
                </div>
            </div>
        </div>
    )
}

export default CityCard