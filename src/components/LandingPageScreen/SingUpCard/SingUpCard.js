import styles from "./SingUpCard.module.css"
import {BsCheckCircle} from "react-icons/bs"

const CardFeature = (props) => {
    return (
        <div className={styles.cardFeature}>
            <BsCheckCircle className={styles.checkLogo}/>
            {props.text}
        </div>
    )
}

const SingUpCard = () => {
    const handleClick = () => {
        alert('button clicked')
    }

    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <div className={styles.title}>
                    It's time to rent and manage your rentals easily.<br />
                    Join the Paso community today.
                </div>
                <div className={styles.featuresContainer}>
                    <CardFeature text={'Affordable'}/>
                    <CardFeature text={'Convenient'}/>
                    <CardFeature text={'Flexible'}/>
                </div>
                <button className={styles.button} onClick={handleClick}>
                    Sign Up Now
                </button>
            </div>
        </div>
    )
}

export default SingUpCard