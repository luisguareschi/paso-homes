import styles from "./InfoBox.module.css"

const InfoBox = (props) => {
    return (
        <div className={styles.InfoBoxContainer}>
            <div className={styles.squareInfo}>
                <div className={styles.imageInfoContainer}>
                    <img  alt={'n/a'} src={require("../../assets/LandingPage/BigLogo.png")} className={styles.logo}/>
                </div>
                <div className={styles.textInfoContainer}>
                    <div className={styles.title}>Who are we??</div>
                    <div className={styles.bodyText}>We are Paso Homes, the ultimate solution for non-vacation rentals! Our “pasos” are properties that provide the perfect
                        blend of flexibility and convenience, allowing you to find the perfect home that fits your lifestyle. </div>
                    <button className={styles.searchButton}>
                        Learn More!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InfoBox