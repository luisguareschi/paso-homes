import styles from "./SearchBar.module.css"
import {BsChevronDown} from "react-icons/bs";

const SearchItem = (props) => {
    return (
        <div>
            <div className={styles.itemTitle}>
                {props.title}
                <BsChevronDown className={styles.downArrow}/>
            </div>
            <div className={styles.itemMessage}>
                {props.message}
            </div>
        </div>
    )
}

const SearchBar = (props) => {
    return (
        <div className={styles.searchBarContainer}>
            <SearchItem title={'Location'} message={'Your destination'}/>
            <SearchItem title={'Date'} message={'When does it start?'}/>
            <SearchItem title={'People'} message={'How many people?'}/>
            <button className={styles.searchButton}>
                Explore now
            </button>
        </div>
    )
}

export default SearchBar