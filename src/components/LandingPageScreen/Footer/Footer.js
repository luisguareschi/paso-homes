import styles from "./Footer.module.css"
import {FiSend} from "react-icons/fi"
const Footer = () => {
    const handleClick = () => {
        alert('clicked')
    }
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.title}>
                    Explore the world with <br/> PasoHomes!
                </div>
                <div className={styles.description}>
                    We offer tailored services for all your traveling needs. Our host are wonderful,
                    ready to accommodate your stay as you enjoy your vacation without worries.
                    <br/>
                    <br/>
                    @2023
                    <br/>
                    PasoHomes.
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.linksContainer}>
                    <a>About us</a>
                    <a>Privacy Policy</a>
                    <a>Contact us</a>
                </div>
                <div className={styles.inputContainer}>
                    <input placeholder={'Enter your email address'}/>
                    <button className={styles.button} onClick={handleClick}>
                        Send
                        <FiSend />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer