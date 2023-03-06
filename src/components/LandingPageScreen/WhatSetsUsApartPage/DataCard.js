import styles from "./WhatSetsUsApartPage.module.css"

const DataCard = (props) => {
    return (
        <div className={styles.dataCardContainer}>
            <img alt={'n/a'} src={props.dataCard.img} className={styles.cardImage}/>
            <div className={styles.dataCardTitle}>{props.dataCard.title}</div>
            <div className={styles.dataCardText}>{props.dataCard.description}</div>
        </div>
    )
}

export default DataCard