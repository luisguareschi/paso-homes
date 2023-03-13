import styles from "./SearchHomePage.module.css"
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import {IoIosArrowDown} from "react-icons/io";

const SearchHomePage = (props) => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.outerBodyContainer}>
                <div className={styles.bodyContainer}>
                    <h1 className={styles.title}>
                        Discover Your<br />
                        New Home
                    </h1>
                    <h6 className={styles.message}>Your next home is waiting. Start searching now!</h6>
                    <SearchBar />
                </div>

            </div>
            <div className={styles.arrowContainer}>
                <IoIosArrowDown className={styles.downArrow} onClick={props.handleArrowClicked}/>
            </div>
        </div>
    )
}

export default SearchHomePage