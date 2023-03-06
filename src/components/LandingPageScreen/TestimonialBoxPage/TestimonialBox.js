import styles from "./TestimonialBox.module.css";
import InfoBox from "../InfoBoxPage/InfoBox";

const imgs = [
    {img1: require("../../../assets/LandingPage/Testimonial1.png")},
    {img2: require("../../../assets/LandingPage/Testimonial1.png")},
    {img3: require("../../../assets/LandingPage/Testimonial1.png")}
]

const TestimonialBox = (props) => {
    return (
        <div className={styles.testimonialContainer}>
            <div className={styles.titleText}>Testimonials</div>
            <div className={styles.squareContainer}>

                <div className={styles.testimonialImage1}>
                    <div className={styles.bluredBox1}>
                        <img alt={'n/a'} src={require("../../../assets/LandingPage/Quote.png")} className={styles.imageQuote1}/>
                        <div className={styles.textStyle}>Paso Homes is the ideal choice for both tenants and landlords looking for non-vacation rental properties . . .</div>
                    </div>
                </div>

                <div className={styles.testimonialImage2}>
                    <div className={styles.bluredBox2}>
                        <img alt={'n/a'} src={require("../../../assets/LandingPage/Quote.png")} className={styles.imageQuote2}/>
                        <div className={styles.textStyle}>Our focus on properties near academic and health institutions ensures that our properties are strategically located . . .</div>
                    </div>
                </div>

                <div className={styles.testimonialImage3}>
                    <div className={styles.bluredBox3}>
                        <img alt={'n/a'} src={require("../../../assets/LandingPage/Quote.png")} className={styles.imageQuote3}/>
                        <div className={styles.textStyle}>Additionally, our flexibility in terms of rent timeframes (1-3 months) sets us apart from the competition . . .</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialBox